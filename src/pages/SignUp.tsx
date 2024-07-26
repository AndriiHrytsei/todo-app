import { useEffect } from 'react'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'



const Registration = () => {

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/tasks")
      }
    })
  }, [])

  return (
    <main>
      <Link to="/">Sign in</Link>      
      <h1>Sign up</h1>
      <SignUpForm />
    </main>
  )
}

export default Registration