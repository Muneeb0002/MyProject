export default function Jobs({ switchToDashboard }) {
  return (
    <div style={styles.container}>
      <h1>Jobs</h1>

      <div style={styles.card}>
        <h2>Frontend Developer</h2>
        <p>Company: ABC Solutions</p>
        <p>Location: Karachi</p>
        <button style={styles.button}>Apply Now</button>
      </div>

      <div style={styles.card}>
        <h2>Backend Developer</h2>
        <p>Company: XYZ Technologies</p>
        <p>Location: Lahore</p>
        <button style={styles.button}>Apply Now</button>
      </div>

      <button onClick={switchToDashboard} style={styles.backButton}>
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
    margin: '15px auto',
    width: '350px',
  },

  button: {
    padding: '8px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  backButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}