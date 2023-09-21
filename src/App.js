import { useState } from 'react'
import MoleContainer from './MoleContainer.js'
//THE PROJECT WOULDN'T WORK UNTIL I STUFFED EVERYTHING INTO SRC
function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1 className='text-alignment-center'>React-a-Mole!</h1>
            <h2>{score}</h2>
            {createMoleHill()}
        </div>
    )
}

export default App

