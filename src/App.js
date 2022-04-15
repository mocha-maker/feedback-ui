// utilities
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

export default function App() {

    return (
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>

              <Route exact path='/' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }>

              </Route>

              <Route path='/about' element={<AboutPage/>}/>
              
            </Routes>
          </div>
          <AboutIconLink/>

        </Router>
      </FeedbackProvider>
    )
}
