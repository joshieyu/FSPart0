import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      {props.type}: {props.value}
    </div>
  )
}


const Statistics = (props) => {
  if (props.total == 0)
    {
      return (
        <div>
          {"\nNo feedback given"}
        </div>
      )
    }
  else if (props.type == "lines") return (
    <div>
      <StatisticLine type="good" value={props.good} />
      <StatisticLine type="neutral" value={props.neutral} />
      <StatisticLine type="bad" value={props.bad} />
      <StatisticLine type="total" value={props.total} />
      <StatisticLine type="average" value={props.average} />
      <StatisticLine type="positive" value={props.positive} />
    </div>
  )
  else return (
    <div>
      <table>
        <tr>
          <td>good: </td>
          <td> {props.good}</td>
        </tr>
        <tr>
          <td>neutral: </td>
          <td> {props.neutral}</td>
        </tr>
        <tr>
          <td>bad: </td>
          <td> {props.bad}</td>
        </tr>
        <tr>
          <td>total: </td>
          <td> {props.total}</td>
        </tr>
        <tr>
          <td>average: </td>
          <td> {props.average}</td>
        </tr>
        <tr>
          <td>positive: </td>
          <td> {props.positive}</td>
        </tr>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total)

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>
        statistics
      </h1>
      <Statistics type={"table"} good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App