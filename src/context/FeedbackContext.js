import { createContext, useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import data from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(data)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}
    })

    // Add feedback item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Edit feedback item
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    // Delete feedback item
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
    }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext