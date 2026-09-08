import { useState } from 'react'

export default function ResetPassword({ switchToLogin }) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    console.log('Password reset successfully')

    // Backend reset-password API yahan lagegi.

    alert('Password reset successfully!')

    switchToLogin()
  }

  return (
    <div style={styles.card}>
      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Reset Password
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
    backgroundColor: '#dc3545',
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