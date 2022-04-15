import {useState, useContext} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelector from './RatingSelector'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)

    const [btnDisabled, setBtnDisabled] = useState(true)
    const [msg, setMsg] = useState('')

    const { addFeedback } = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        // Check if text is empty
        if (text === '') {
            setBtnDisabled(true)
            setMsg(null)
        } else if (text !== '' && text.trim().length < 10) {
            setBtnDisabled(true)
            setMsg('Review must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMsg(null)
        }
        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            addFeedback(newFeedback);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelector select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" value={text} placeholder="Write a Review" />
                    <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
                </div>

                { msg && <div className='message'>{msg}</div>}
            </form>
        </Card>  
    )
}

export default FeedbackForm