const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) =>  {
  const total = parts.reduce((a, b) => a + b.exercises, 0)
  return (
    <p><strong>Number of exercises: {total}</strong></p>
  )
}

const Part = ({ part }) => <p> {part.name} {part.exercises} </p>

const Content = ({ parts }) => {
  return (
    parts.map(part =>
      <Part
        key={part.id} part={part}
      />
    )
  )
}

const Course = ( {course} ) => {
  return (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
  )
}

export default Course
