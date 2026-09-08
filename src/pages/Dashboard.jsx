export default function Dashboard({
  switchToLogin,
  switchToJobs,
  switchToProfile,
}) {
  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>

      <p>Welcome to your dashboard 🎉</p>

      <div style={styles.buttons}>
        <button onClick={switchToJobs} style={styles.button}>
          Jobs
        </button>

        <button onClick={switchToProfile} style={styles.button}>
          My Profile
        </button>

        <button onClick={switchToLogin} style={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
  },

  buttons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '20px',
  },

  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}