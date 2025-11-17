import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../Firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import arrowicon from '../assets/arrowicon.png'

function SignUp() {


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const navigate = useNavigate()

    const handleSignup = async(e) =>{
        e.preventDefault();

        try{
            const userCredentials = await  createUserWithEmailAndPassword(auth,email,password);

            const User = userCredentials.user;

            await updateProfile(User,{displayName: name});
            console.log("profile created successfully");
            alert('User signed up successfully');
           

            navigate('/');
            

          }catch(err){
            console.log(err);
            alert("cant create account error occured");
            
        }
        

    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-200'>

      <Link to={'/'} className='absolute top-4 left-5'><img src={arrowicon} alt="Home" className='w-12 h-12'/></Link>


        <div className='bg-white p-8 w-full max-w-md rounded-xl'>

          <h2 className='text-center font-bold text-2xl b-6 mb-2'>SignUp</h2>

          <form onSubmit={handleSignup} className='space-y-4'>
            
             <label className='font-medium block text-sm mb-1'>Email</label> 
             <input type="email" placeholder='Email.' onChange={(e)=> setEmail(e.target.value)} 
             className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'/>

             <label className='font-medium block text-sm mb-1'>Password</label>
             <input type="password" placeholder='********' onChange={(e)=>setPassword(e.target.value)} 
             className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />


             <label className='font-medium block text-sm mb-1'>Author Name</label>
             <input type="text" placeholder='Author Name' onChange={(e)=>setName(e.target.value)}
             className='w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'/>

             <button type='submit' className=' w-full py-2 font-medium text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition'>SignUp</button>
         </form>
        </div>

    </div>
  )
}

export default SignUp;