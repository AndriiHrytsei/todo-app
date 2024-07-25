import React, { useEffect, useState } from 'react'
import { logOut } from '../redux/operations'
import { useAppDispatch } from '../redux/store'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'

const Tasks = () => {

  const [heading, setHeading] = useState("")

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleButtonClick = () => {
    dispatch(logOut())
    navigate('/signIn')
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setHeading("You are signed in!")
        console.log(auth?.currentUser);
      } else {
        setHeading("You are not signed in.")
        console.log(auth?.currentUser);
      }
    });
  }, []);

  return (
    <main>
      <h1>{heading}</h1>
      <button type="button" onClick={handleButtonClick}>logout</button>
    </main>
  )
}

export default Tasks