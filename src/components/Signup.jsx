import { useState } from 'react'

export default function Signup({ switchToLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    alert(`Account Created for: ${name}`)
  }

  return (
    <div style={styles.card}>
      <h2>Sign Up Screen</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
          style={styles.input} 
        />
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
        <button type="submit" style={styles.button}>Create Account</button>
      </form>
      <p style={{ marginTop: '15px' }}>
        Already have an account?{' '}
        <span onClick={switchToLogin} style={styles.link}>Login yahan karein</span>
      </p>
    </div>
  )
}

const styles = {
  card: { padding: '20px', border: '1px solid #ddd', borderRadius: '8px', width: '300px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  button: { padding: '8px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  link: { color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }
}