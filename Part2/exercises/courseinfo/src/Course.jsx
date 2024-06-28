const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <h2>total of {sum} exercises</h2>

const Part = ({ part }) => 
  <p key={part.id} >
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.id} part={part} />)} 
  </>

const Course = ({ course }) => {

  const total = course.parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total sum={total} />
    </>
  )
}

export default Course