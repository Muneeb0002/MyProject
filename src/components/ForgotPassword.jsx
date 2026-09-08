import { useState } from 'react'

export default function ForgotPassword({
  switchToLogin,
  switchToReset,
}) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Reset link requested for:', email)

    // Backend forgot-password API yahan lagegi.

    alert('Reset link sent!')

    switchToReset()
  }

  return (
    <div style={styles.card}>
      <h2>Forgot Password</h2>

      <p>
        Enter your email to reset your password.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Send Reset Link
        </button>
      </form>

      <p>
        <span
          onClick={switchToLogin}
          style={styles.link}
        >
          Back to Login
        </span>
      </p>
    </div>
  )
}

const styles = {
  card: {
    padding: '25px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    backgroundColor: 'white',
    textAlign: 'center',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },

  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },

  link: {
    color: '#007bff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}