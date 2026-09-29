import { useState } from  'react'
function App(){
  const [technologies, setTechnologies] = useState([
    { id:1, name:'Node' },
    { id:2, name:'vue' }
  ])
  const [techName, setTechName] = useState('')
  const [editingId, setEditingId] = useState(null)
  function handleSubmit(event){
    event.preventDefault()
    if(techName.trim() === ''){
      return;
    }

    if(editingId !== null){
      setTechnologies( prev => 
        prev.map( technology => 
          technology.id === editingId ? { ...technology, name:techName } : technology
        )
      )
    } else {
      setTechnologies( prev => [
        ...prev,
        {id:Date.now(), name:techName }
      ])
    }

    cancelUpdate()
  }
  function removeTech(id){
    setTechnologies(prev => 
      prev.filter(technology => technology.id !== id)
    )
    if (editingId === id) {
      cancelUpdate()
    }
  }
  function updateTech(technology) {
    setEditingId(technology.id)
    setTechName(technology.name)
  }
  function cancelUpdate(){
    setEditingId(null)
    setTechName('')
  }
  return(
    <>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" value={techName} onChange={ (event) => setTechName(event.target.value) } />
        <button type='submit'> { editingId !== null ?'Update Tech':'Add Tech' } </button>
        {editingId !== null && (
          <button type='button' onClick={cancelUpdate}>Cancel</button>
        )}
      </form>
      <br />
      {technologies.map( (technology) => (
        <div key={technology.id}>
          <span>{technology.name}</span>
          <button onClick={() => removeTech(technology.id)}>Remove</button>
          <button onClick={() => updateTech(technology)}>Update</button>
        </div>
      ))}
    </>
  )
}
export default App
