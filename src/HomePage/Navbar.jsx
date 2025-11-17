import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Authcontext/AuthContext';
import { auth } from '../Firebase/firebase';
import { signOut } from 'firebase/auth';
import homeicon from '../assets/homeicon.png'

function Navbar() {

  const {user} = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async() => {
  
      try{
  
          await signOut(auth);
          alert('User Signed out')
          navigate('/signin');
          
  
      } catch(err){
          console.log('Error signing out',err);
          
      }
  
  }

  return (
    <div className='top-0 left-0 w-full  p-0 m-0 right-0 fixed z-50'>
        <nav className='w-full px-3 flex justify-between items-center h-17 bg-blue-600 text-white shadow'>
            <div>
                <h1 className='font-bold p-6 text-3xl'>myBlog</h1>
            </div>
            {user?
              (<div className='flex gap-4 items-center'>
                <Link to={'/'} className='pr-5'> <img src={homeicon} alt="Home" className=' cursor-pointer w-7 h-7'/> </Link>
                <Link to={'/author'} className='text-lg pr-5 cursor-pointer px-6'>{user.displayName}</Link>
                <button onClick={handleLogOut} className='text-lg pr-5 cursor-pointer'>LogOut</button>
              </div>)

              :

              (<div className='flex gap-4 items-center'>
                <Link to={'/'} className='pr-5'> <img src={homeicon} alt="Home" className=' cursor-pointer w-7 h-7'/> </Link>
                <Link to={'/signup'} className='text-lg pr-5 cursor-pointer'>SignUp</Link>
                <Link to={'/signin'} className='text-lg pr-5 cursor-pointer'>SignIn</Link>
              </div>)
            }
        </nav>
    </div>
  )
}

export default Navbar;

