import React, { useState } from 'react'
import { auth } from '../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import arrowicon from '../assets/arrowicon.png'

function SignIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignIn = async (e)=>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("SignIn successfull");
            alert('User Signed in successfully.')
            
            navigate('/')

        } catch(err){
            console.log(err);
            alert('Error Signing in.');
            
        }


    }      
    
  return (
    <div className='min-h-screen bg-blue-200 flex justify-center items-center'>

        <Link to={'/'} className='absolute top-4 left-5'><img src={arrowicon} alt="Home" className='w-12 h-12'/></Link>
        <div className='p-8 w-full max-w-md bg-white rounded-xl'>

            <h1 className='text-center font-bold text-2xl mb-2'>SignIn</h1>

            <form onSubmit={handleSignIn} className='space-y-4'>

                <label className='block font-medium text-sm mb-1'>Email</label>
                <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}
                className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'/>

                <label className='block font-medium text-sm mb-1'>password</label>
                <input type="password" placeholder='********' onChange={(e)=>setPassword(e.target.value)}
                className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'/>

                <button type='submit' className='w-full bg-blue-600 text-white font-medium py-2 hover:bg-blue-700 transition cursor-pointer
                rounded-lg'>SignIn</button>
            </form>
            
        </div>

    </div>
  )
}

export default SignIn;