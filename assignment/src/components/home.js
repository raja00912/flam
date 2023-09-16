import React, { useState } from 'react'

function Home() {
    const [sheet, setSheet] = useState(false);

    const MySheet = () => {
        return (
            <>
                <h2>Bottom Sheet</h2>

                <button onClick={() => setSheet(false)}>Close</button>
            </>
        )
    }
    return (
        <>
            <button onClick={() => setSheet(true)}>Open Bottom Sheet</button>
        </>
    )
}

export default Home