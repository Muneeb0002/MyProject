export default function Dashboard({ switchToLogin }) {
  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>

      <p>Welcome to your dashboard 🎉</p>

      <button onClick={switchToLogin} style={styles.button}>
        Logout
      </button>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
  },

  button: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}