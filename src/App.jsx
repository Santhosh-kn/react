import { useReducer } from 'react'
const initialState = { name:'', email:'', loading:false, error:''}
function reducer(state, action){
  if(action.type === 'updateField'){
    return { ...state, [action.field]: action.value }
  }
  if(action.type === 'reset'){
    return initialState
  }
  if(action.type === 'submitStart'){
    return { ...state, loading:true, error:''}
  }
  if(action.type === 'submitSuccess'){
    return { ...state, loading:false, error:''}
  }
  if(action.type === 'submitError'){
    return { ...state, loading:false, error:action.message}
  }
  return state;
}
function App(){
  const [form, dispatch] = useReducer(reducer, initialState)
  function handleSubmit(event){
    event.preventDefault()
    dispatch({type:'submitStart'})
  }
  function handleChange(event){
    dispatch({
      type:'updateField',
      value:event.target.value,
      field:event.target.name
    })
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <p>Name: {form.name}</p>
        <input name="name" value={form.name} onChange={handleChange} />
        <br/>
        <p>Email: {form.email}</p>
        <input name="email" value={form.email} onChange={handleChange} />
        <br/>
        <button type='button' onClick={() => dispatch({ type:'reset' })}>Reset</button>
        <br />
        <button type="submit">Submit</button>
      </form>
      {form.loading && <p>Submitting......</p>}
      {form.error && <p>{form.error}</p>}
    </>
  )
}
export default App