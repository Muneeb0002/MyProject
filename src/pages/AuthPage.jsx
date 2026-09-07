import { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default function AuthPage() {
  const [currentScreen, setCurrentScreen] = useState('login')

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {currentScreen === 'login' ? (
        <Login switchToSignup={() => setCurrentScreen('signup')} />
      ) : (
        <Signup switchToLogin={() => setCurrentScreen('login')} />
      )}
    </div>
  )
}