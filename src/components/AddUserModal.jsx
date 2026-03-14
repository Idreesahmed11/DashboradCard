import { useState } from "react"

function AddUserModal({addUser}){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [error,setError] = useState("")

const submit = ()=>{

if(!name || !email){
setError("All fields required")
return
}

addUser({name,email})
setName("")
setEmail("")
setError("")

}

return(

<div className="modal-box">

<h4>Add New User</h4>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<p className="text-danger">{error}</p>

<button onClick={submit}>Add</button>

</div>

)

}

export default AddUserModal