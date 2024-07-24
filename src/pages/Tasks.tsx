import React from 'react'
import { logOut } from '../redux/operations'
import { useAppDispatch } from '../redux/store'
import { useNavigate } from 'react-router-dom'

const Tasks = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleButtonClick = () => {
    dispatch(logOut())
    navigate('/signIn')
  }

  return (
    <main>
      <button type="button" onClick={handleButtonClick}>logout</button>
    </main>
  )
}

export default Tasks