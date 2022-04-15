import {useState} from 'react'
import Card from './shared/Card'

function FeedbackForm() {

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* @todo - rating select component */}
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" value={text} placeholder="Write a Review" />
                    <button type="submit" className='btn btn-secondary'>Submit</button>
                </div>
            </form>
        </Card>  
    )
}

export default FeedbackForm