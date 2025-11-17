import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from '../Firebase/firebase';
import arrowicon from '../assets/arrowicon.png'

function ReadMore() {

    const {docid} = useParams();
    const [blog,setBlog] = useState(null);

    useEffect(()=>{
        if (!docid) return;

        async function fetchBlog (){
            const docRef = doc(db,'myblog',docid);
            const snap = await getDoc(docRef);

            if(snap.exists()) {
                setBlog({id: snap.id,...snap.data()});
            } else {
                setBlog('notfound');
            }

        }
        fetchBlog();
    },[docid]);
    if(!blog) return <p className='text-center mt-10'>Loading...</p>;
    if (blog === "notfound") return <p className="text-center mt-10">Blog not found</p>;

    const createdTime = blog.createdAt?.seconds
    ? new Date(blog.createdAt.seconds*1000).toLocaleDateString()
    : "unknown date";

  return (
    <div className='overflow-y-scroll hide-scrollbar m-0 p-0 bg-blue-100 h-screen'>
      <div className="max-w-3xl mx-auto p-4 mt-6">
        <Link to={'/'} className='absolute top-4 left-5'><img src={arrowicon} alt="Home" className='w-12 h-12'/></Link>
      
      <img src={blog.imageUrl} alt={blog.title}
      className="w-full h-3xl object-cover rounded-lg shadow"/>

        <div className="flex items-center gap-4 mt-6">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-semibold">
              {blog.author?.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="text-lg font-semibold">{blog.author}</p>
              <p className="text-gray-500 text-sm">{createdTime}</p>
            </div>
        </div>

      
      <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>

      
      <div className="border-b border-gray-400 my-4"></div>

      
      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}</p>
    </div>
   </div>
  )
}

export default ReadMore;