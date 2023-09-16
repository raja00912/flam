import React, { useState } from 'react'
import BottomSheet from './bottomsheet';

function Home() {
    const [sheet, setSheet] = useState(false);

    const closeModal = () => {
        setSheet(false)
    }

    return (
        <>
            <button onClick={() => setSheet(true)}>Open Bottom Sheet</button>
            {sheet && <BottomSheet closeModal={closeModal} />}
        </>
    )
}

export default Home