import { useState } from 'react'


const Registration = () => {

  const [username, setUsername] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  const handleRegistration = () => {
    console.log(username, password1, password2)
  }

  return ( 
    <div>
      <h4>Register Here</h4>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"/>
      <input type="text" value={password1} onChange={e => setPassword1(e.target.value)} placeholder="Password"/>
      <input type="text" value={password2} onChange={e => setPassword2(e.target.value)} placeholder="Password"/>
      <button onClick={handleRegistration}>Register</button>
    </div>
   );
}
 
export default Registration;