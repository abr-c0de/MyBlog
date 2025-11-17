import React from 'react'
import { Link } from 'react-router-dom';
import homeicon from '../assets/homeicon.png'
import { useAuth } from '../Authcontext/AuthContext';

function AuthorNavbar() {
  const {user} = useAuth();
  return (
    <div className='w-full m-0 p-0 top-0 fixed z-50'>

        <nav className='w-full px-3 flex justify-between items-center h-17 bg-blue-600 text-white shadow'>
            <div>
            <h1 className='font-bold pl-8 text-2xl '>{user.displayName}</h1>
            </div>

            <div className='flex gap-4 items-center pr-9'>
                <Link to={'/'} className='pr-6'> <img src={homeicon} alt="Home" className=' cursor-pointer w-7 h-7'/> </Link>
                <Link to={'/createblog'} className='text-lg pr-6 cursor-pointer'>Create+</Link>
                
                
            </div>
        </nav>
        

    </div>
  )
}

export default AuthorNavbar;