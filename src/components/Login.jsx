import { useState } from 'react'

export default function Login({ switchToSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    alert(`Logged in: ${email}`)
  }

  return (
    <div style={styles.card}>
      <h2>Login Screen</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          style={styles.input} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          style={styles.input} 
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        New user?{' '}
        <span onClick={switchToSignup} style={styles.link}>Sign Up yahan karein</span>
      </p>
    </div>
  )
}

const styles = {
  card: { padding: '20px', border: '1px solid #ddd', borderRadius: '8px', width: '300px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  button: { padding: '8px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  link: { color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }
}