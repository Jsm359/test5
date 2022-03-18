import React, { FC } from 'react'
import { IUser } from '../../types/types'

export interface UserItemProps {
  user: IUser
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: '1px solid gray' }}>
      {user.id}. {user.name} проживает в {user.address.city} на улице {user.address.street}
    </div>
  )
}
