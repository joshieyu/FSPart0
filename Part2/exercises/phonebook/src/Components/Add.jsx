const Add = ({onSubmitHandler, nameValue, nameChangeHandler, numberValue, numberChangeHandler}) => {
  return (
    <form onSubmit={onSubmitHandler}>
        <div>
          name: <input value={nameValue} onChange={nameChangeHandler}/>
        </div>
        <div>
          number: <input value={numberValue} onChange={numberChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default Add