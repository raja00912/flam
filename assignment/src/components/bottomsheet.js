import React from 'react'

function BottomSheet({ closeModal }) {
    return (
        <>
            <div className='modal-wrapper'></div>
            <div className='modal-container'>
                <h2>Bottom Sheet</h2>

                <button onClick={closeModal}>Close</button>
            </div>
        </>
    )
}

export default BottomSheet