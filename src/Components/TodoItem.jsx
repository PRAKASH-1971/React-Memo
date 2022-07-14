import React from 'react'

const delay = (ms) =>{
    const start = Date.now();
    while(Date.now() - start<ms){
        continue;
    }
    return true
}

const TodoItem = ({status,id,title,toggleStatus,handleDelete}) => {
    const isDelayed = delay(200)
 console.log("Todo is rendering", id);

  return (
    <div style={{display:"flex",margin:"1em auto",justifyContent:"center"}}>
        <div style={{marginRight:"1em"}}> <b> {title}</b></div>
        <div tyle={{margin:"1em auto"}}> {status ? "True":"False"}</div>
        <button onClick={()=> toggleStatus(id)}>Toggle</button>
        <button onClick={()=> handleDelete(id)}>Delete</button>
    </div>
  )
}

function areEqual(prevProps, nextProps){
  if(prevProps.id === nextProps.id && prevProps.status === nextProps.status){
    return true
  }  return false
}

export default React.memo(TodoItem, areEqual)