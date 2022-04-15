import { createContext, useState, useEffect } from 'react'
import data from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState(data)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // On load
    useEffect(() => {
        fetchFeedback()
    },[])

    // Fetch feedback data
    const fetchFeedback = async () => {
        const response = await fetch(
            `/feedback?_sort=id&_order=desc`
        )
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    // Add feedback item
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([data, ...feedback])

    }

    // Edit feedback item
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    // Update feedback item
    const updateFeedback = async (id, newItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem)
        })

        const data = await response.json()
        setFeedback(feedback.map((data) => data.id === id ? {...data, ...newItem} : data))
    }

    // Delete feedback item
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Pass context to other components
    return (<FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
    }}
    >
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext