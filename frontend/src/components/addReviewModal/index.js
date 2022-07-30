import React, { useState, createContext, useContext } from 'react';
import { Modal } from '../../context/Modal';
import AddReview from '../addReview';
import './AddReview.css'

export const AddReviewModalContext = createContext()
export const useShowModal = () => useContext(AddReviewModalContext)

const AddReviewModal = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <AddReviewModalContext.Provider value={{showModal, setShowModal}}>
            <button className='add-review-button' onClick={() => setShowModal(true)}>Leave a Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddReview />
                </Modal>
      )}
        </AddReviewModalContext.Provider>
    )
}

export default AddReviewModal