import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteArr, setVoteArr] = useState(
    Array(7).fill(0)
  )
  const [mostVoted, setMostVoted] = useState(0)

  const setMaxIndex = () => {
    let maxIndex = 0

    for (let i = 0; i < voteArr.length; ++i)
      {
        if (voteArr[i] > voteArr[maxIndex])
          maxIndex = i
      }
    setMostVoted(maxIndex)
  }

  const handleVoteClick = () => {
    console.log(voteArr)
    const copy = [...voteArr]
    copy[selected] += 1
    setVoteArr(copy)
    setMaxIndex()
  }

  const handleNextClick = () => {
    const newSelected = Math.floor(Math.random() * 7)
    setSelected(newSelected)
    console.log(newSelected)
  }

  return (
    <>
      <h1>
        Anecdote of the day
      </h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {voteArr[selected]} votes
      </div>
      <div>
        <button onClick={handleVoteClick}>
          vote
        </button>
        <button onClick={handleNextClick}>
          next anecdote
        </button>
      </div>
      <h1>
        Anecdote with the most votes
      </h1>
      <div>
        {anecdotes[mostVoted]}
      </div>
      <div>
        has {voteArr[mostVoted]} votes
      </div>
    </>
  )
}

export default App