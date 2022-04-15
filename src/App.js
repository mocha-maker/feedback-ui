import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import data from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

export default function App() {

  const [feedback, setFeedback] = useState(data)
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
      }
    }

  return (
    <>
    <Header />
    <div className="container">
      <FeedbackForm />
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  )
}
