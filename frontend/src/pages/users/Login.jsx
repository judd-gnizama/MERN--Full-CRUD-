import { useState } from "react"
import Alert from "../../components/Alert"

const Login = () => {

  // Error State
  const [ error, setError ] = useState(null);
  
  // Form data state
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
    
  }

  return (
    <section className="card">
      <h1 className="title">Login to your account</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email Address" className="input"
        value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
        <input type="password" placeholder="Password" className="input" 
        value={password} onChange={(e) => setPassword(e.target.value)}autoFocus />
        <button className="btn">Login</button>
      </form>

      { error && <Alert msg={error}/> }


    </section>
  )
}

export default Login
