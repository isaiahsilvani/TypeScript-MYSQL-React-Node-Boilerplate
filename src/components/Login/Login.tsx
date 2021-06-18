import { useState } from 'react'
import * as auth_api from '../../services/auth'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    const result = auth_api.loginRequest(username, password)
    .then((result) => {
      console.log(result)
    })
  }

  return ( 
    <div>
      <h4>Login Here</h4>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"/>
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
      <button onClick={handleLogin}>Login</button>
    </div>
   );
}
 
export default Login;