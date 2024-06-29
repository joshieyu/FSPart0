const Search = ({value, handler}) => {
  return (
      <form>
        <div>
          filter shown with <input value={value} onChange={handler} />
        </div>
      </form>
  )
}

export default Search