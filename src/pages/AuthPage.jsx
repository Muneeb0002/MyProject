import { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ForgotPassword from '../components/ForgotPassword'
import ResetPassword from '../components/ResetPassword'

export default function AuthPage() {
  const [currentScreen, setCurrentScreen] = useState('login')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {currentScreen === 'login' && (
        <Login
          switchToSignup={() => setCurrentScreen('signup')}
          switchToForgotPassword={() => setCurrentScreen('forgotPassword')}
          switchToDashboard={() => setCurrentScreen('dashboard')}
        />
      )}

      {currentScreen === 'signup' && (
        <Signup
          switchToLogin={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'forgotPassword' && (
        <ForgotPassword
          switchToLogin={() => setCurrentScreen('login')}
          switchToReset={() => setCurrentScreen('resetPassword')}
        />
      )}

      {currentScreen === 'resetPassword' && (
        <ResetPassword
          switchToLogin={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard
          switchToLogin={() => setCurrentScreen('login')}
        />
      )}
    </div>
  )
}