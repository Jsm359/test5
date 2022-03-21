import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../../types/types'
import { useParams, useNavigate } from 'react-router-dom'

export type UserItemParams = {
  id: string;
}

export const UserItemPage:FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const  params = useParams<UserItemParams>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response =  await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')}>Назад</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city}
      </div>
    </div>
  )
}
