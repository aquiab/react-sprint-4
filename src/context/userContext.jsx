import React, { createContext, useState } from 'react'
import userImage from '../assets/user-image.png'
export const userContext = createContext()

const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "Olivia",
    image: userImage
  })

  return (
    <userContext.Provider value={{user, setUser}}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider