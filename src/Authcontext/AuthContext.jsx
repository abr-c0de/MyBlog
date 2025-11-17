import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase'; 

const AuthContext = createContext(null)



export const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true)

useEffect(()=>{
  const unsub = onAuthStateChanged(auth,(stat) =>{
    setUser(stat);
    setLoading(false)
  })

  return () => unsub()
},[]);

if(loading){
  return null;
}

  return (
    
      <AuthContext.Provider value={{user}}>
        {children}
      </AuthContext.Provider>
    
  )
}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}