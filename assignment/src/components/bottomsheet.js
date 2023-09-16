import React from 'react'

function BottomSheet({ closeModal }) {
    return (
        <>
            <div className='modal-wrapper' onClick={closeModal}></div>
            <div className='modal-container'>
                <h2>Bottom Sheet</h2>

                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus harum, tempore nostrum nobis illum officiis facere, modi saepe porro debitis excepturi similique fugit quisquam ipsum assumenda non molestias est! Eum neque ipsam impedit omnis ipsa et voluptates tempore aliquid eos, maxime placeat amet quis nesciunt explicabo aperiam vel deserunt! Quis culpa voluptatum quas quod iusto hic, quasi odit natus?</p>

                <button className='model-btn' onClick={closeModal}>Close</button>
            </div>
        </>
    )
}

export default BottomSheet