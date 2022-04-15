import { Link } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'

function AboutIconLink() {
  return (
    <div className="about-link">
        <Link to='/about'>
            <FaQuestionCircle size={30} />
        </Link>    
    </div>
  )
}

export default AboutIconLink