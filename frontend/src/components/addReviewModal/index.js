import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddReview from '../addReview';

const AddReviewModal = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Leave a Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddReview/>
                </Modal>
      )}
        </>
    )
}

export default AddReviewModal