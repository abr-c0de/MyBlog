import React from 'react'
import defaultBlogImg from '../assets/defaultblogimg.png'
import { useNavigate } from 'react-router-dom';

function BlogCard({blog}) {

  const navigate = useNavigate();

    const createdTime = blog.createdAt?.seconds
    ? new Date(blog.createdAt.seconds*1000).toLocaleDateString()
    : "unknown date";
  return (
    <div className='border shadow-md rounded-lg p-4 bg-white cursor-pointer '>

      <p className='text-sm font-medium text-orange-600 mb-2'>{blog.author}</p>

        <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>

        <div className='h-44 overflow-hidden rounded-lg mb-3.5 w-full'>
          <img src={blog.imageUrl || defaultBlogImg} alt="" className='w-full h-full object-cover' 
          onError={(e)=>{
            e.target.src= defaultBlogImg
          }}/>
        </div>

        <p className='text-gray-700 mb-3 '>{blog.content}</p>

        <button className='w-full rounded border bg-gray-200 hover:bg-gray-300 transition cursor-pointer py-1 mb-1'
        onClick={()=>navigate(`/readmore/${blog.id}`)}>Read More</button>

        <p className='text-xs text-gray-400 text-right mt-1'>{createdTime}</p>
    </div>
  )
}

export default BlogCard;