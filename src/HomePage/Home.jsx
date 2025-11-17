import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import BlogCard from '../BlogCard/BlogCard';



function Home() {
  const [Blogs,setBlogs] = useState([]);

  useEffect(()=>{
    const blogQuerry = query(collection(db,"myblog"),orderBy("createdAt","desc"));

    const resources = onSnapshot(blogQuerry,(snapshot)=>{
      const resdata = snapshot.docs.map(doc=>({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(resdata);
    })

    return() => resources();
  },[]);
    
  
  return (
    <div className='overflow-y-scroll hide-scrollbar m-0 p-0 bg-blue-100 h-screen'>
        <Navbar/>
        

        <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 '>
          {Blogs.map(doc=>(
            
              <BlogCard key={doc.id} blog={doc}/> 
            
          ))}
        </div>
        
    </div>
  )
}

export default Home;