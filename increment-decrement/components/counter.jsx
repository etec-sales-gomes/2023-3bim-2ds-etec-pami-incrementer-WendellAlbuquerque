export function Counter(props) {

  return(
  <input type="text" className="form-control" value={props.num} onChange={props.handler}/>
  )
}