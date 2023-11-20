const Part = (props) => {
  return (
    <div>
      {props.text} <input value={props.value} onChange={props.onChange}/>
    </div>
  )
}

const Button = ( {type, text} ) => {
  return (
    <button type={type}>{text}</button>
  )
}

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <Part
        text={"name:"}
        value={props.valueName}
        onChange={props.onChangeName}
      />
      <Part
          text={"number:"}
          value={props.valueNumber}
          onChange={props.onChangeNumber}
      />
      <Button
        type={"submit"}
        text={"add"}
      />
    </form>
  )
}

export default Form
