import React, { useEffect, useState } from 'react'
import AuthorNavbar from './AuthorNavbar';
import { useAuth } from '../Authcontext/AuthContext';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import AuthorblogCard from '../BlogCard/AuthorblogCard';

function Author() {

  const {user} = useAuth();
  const [blogs,setBlogs] = useState([]); 

  useEffect(() =>{
    if(!user) return;

    const blogsQuerry = query(
      collection(db,'myblog'),
      where('userid', '==',user.uid),
      orderBy('createdAt','desc'));

      const unsubscribe = onSnapshot(blogsQuerry,(snapshot)=>{
        const datas = snapshot.docs.map(doc=>({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(datas);
      })

      return () => unsubscribe();

    
  },[user])

  return (
    <div className='overflow-y-scroll hide-scrollbar m-0 p-0 bg-blue-100 h-screen'>
        <AuthorNavbar/>

        <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
          {blogs.map(doc=>(

            <AuthorblogCard blog={doc} key={doc.id}/>

          ))}

        </div>

    </div>
  )
}

export default Author;