// utilities
import { v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import data from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

export default function App() {

    const [feedback, setFeedback] = useState(data)

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete this feedback?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    }

    return (
      <Router>
      <Header />
        <div className="container">
          <Routes>

            <Route exact path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
              </>
            }>

            </Route>

            <Route path='/about' element={<AboutPage/>}/>
            
          </Routes>
          <AboutIconLink/>

        </div>

      </Router>
    )
}
