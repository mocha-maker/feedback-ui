import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({item}) {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => editFeedback(item)} className="edit">
            <FaEdit className='icon'/>
        </button>
        <button onClick={() => deleteFeedback(item.id)} className="close">
            <FaTimes className='icon'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>  
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default FeedbackItem