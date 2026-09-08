export default function Profile({ switchToDashboard }) {
  return (
    <div style={styles.container}>
      <h1>My Profile</h1>

      <div style={styles.card}>
        <h2>John Doe</h2>
        <p>Email: john@example.com</p>
        <p>Role: User</p>
      </div>

      <button onClick={switchToDashboard} style={styles.button}>
        Back to Dashboard
      </button>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
  },

  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px auto',
    width: '300px',
  },

  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}