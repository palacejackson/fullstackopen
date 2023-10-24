import { useState } from 'react'

const Header = ({title}) =>  <h3>{title}</h3>

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text, total}) => <p>{text} {total}</p>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    console.log('good:', good)
    const updatedGood = good + 1
    setGood(updatedGood);
    setTotal(bad + neutral + updatedGood)
  }

  const handleNeutralClick = () => {
    console.log('neutral:', neutral)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral);
    console.log('New neutral;', updatedNeutral)
    setTotal(good + bad + updatedNeutral)
  }

  const handleBadClick = () => {
    console.log('bad:', bad)
    const updatedBad = bad + 1
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad)

  }

  const getAverage = () => (good*1 + neutral*0 + bad*(-1))/total

  const getPostive = () => `${(good/total)*100}%`

  return (
    <div>
      <Header title={'Give Feedback'} />
      <Button handleClick={handleGoodClick} text={'good'} />
      <Button handleClick={handleNeutralClick} text={'neutral'} />
      <Button handleClick={handleBadClick} text={'bad'} />
      <Header title={'Statistics:'} />
      <Statistic text={'Good:'} total={good} />
      <Statistic text={'Neutral:'} total={neutral} />
      <Statistic text={'Bad:'} total={bad} />
      <Statistic text={'Total votes:'} total={total} />
      <Statistic text={'Average'} total={getAverage()} />
      <Statistic text={'Postive'} total={getPostive()} />
    </div>
  )
}

export default App
