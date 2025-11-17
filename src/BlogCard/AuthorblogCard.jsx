import React from 'react'
import defaultBlogImg from '../assets/defaultblogimg.png'
import { useNavigate } from 'react-router-dom';
import { DeleteBlog } from '../DeleteBlog/DeleteBlog';


function AuthorblogCard({blog}) {

  const navigate = useNavigate();

    const createdTime = blog.createdAt?.seconds
    ? new Date(blog.createdAt.seconds*1000).toLocaleDateString()
    : "unknown date";
  return (
    <div className='bg-white shadow-md p-4 rounded-lg flex flex-col justify-between h-full border cursor-pointer'>

        <p className='text-sm font-medium text-purple-700 mb-2'>{blog.author}</p>

        <h2 className='text-lg font-bold mb-2'>{blog.title}</h2>

        <div className='h-48 w-full overflow-hidden rounded-lg mb-3.5'>
          <img src={blog.imageUrl || defaultBlogImg} alt="image" className='w-full h-full object-cover'
          onError={(e)=>{
            e.target.src= defaultBlogImg
          }} />
        </div>

        <p className='text-gray-600 mb-4'>{blog.content}</p>

        <button className='w-full rounded border bg-gray-200 hover:bg-gray-300 transition cursor-pointer py-1 mb-1'
        onClick={()=>navigate(`/readmore/${blog.id}`)}>Read More</button>

        <p className='text-xs text-gray-400 text-right'>{createdTime}</p>

        <div className='border-t border-gray-200 mt-2 w-full'></div>

        <div className='flex gap-3 w-full mx-auto mt-3'> 

          <button className='flex-1 bg-blue-700 text-white rounded py-2 cursor-pointer'
          onClick={()=>navigate(`/updateblog/${blog.id}`)}>Edit</button>

          <button className='flex-1 bg-red-700 text-white rounded py-2 cursor-pointer'
          onClick={()=>DeleteBlog(blog.id)}>Delete</button>

        </div>
    </div>
  )
}

export default AuthorblogCard;