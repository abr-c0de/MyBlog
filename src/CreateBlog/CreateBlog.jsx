import React, { useEffect, useState } from 'react'
import { useAuth } from '../Authcontext/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import arrowicon from '../assets/arrowicon.png';
import { uploadToCloudinary } from '../Cloudinary/uploadToCloudinary';


function CreateBlog() {
  const {user} = useAuth();

  const [blogTitle,setblogTitle] = useState('');
  const [blogContent,setblogContent] = useState('');
  const [genre,setGenre] = useState('');
  const [image,setImage] = useState(null);
  const [imagePreview,setImagePreview] = useState('');
  

  const navigate = useNavigate();

  useEffect(() =>{
    if(!user){
      navigate('/signin');
    }
  },[user])

  const handleImage = async(e) =>{
    const file = e.target.files[0];
    if(!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };


  const handleCreate = async(e) =>{
    e.preventDefault();

    try{
      let imgUrl = ''

      if(image){
      imgUrl = await uploadToCloudinary(image);
         
      }
      await addDoc(collection(db,'myblog'),{
        title: blogTitle,
        content: blogContent,
        userid: user.uid,
        genre: genre,
        author: user.displayName,
        imageUrl: imgUrl,
        createdAt: new Date(),
      });
      alert('New Blog created successfully.')

      navigate('/author');

    } catch (err) {
      console.log('error creating blog',err);
      alert('Error create blog.');
      
    }

  }
 
  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-200 h-80 overflow-y-scroll hide-scrollbar'>

      <Link to={'/'} className='absolute top-4 left-5'><img src={arrowicon} alt="Home" className='w-12 h-12'/></Link>
      
      <form onSubmit={handleCreate} className='bg-white p-6 rounded-lg w-full max-w-lg space-y-4 shadow'>

        <h2 className='text-center font-bold text-2xl'>Create Blog</h2>

        <label className='block text-sm font-medium mb-1'>Genre</label>

        <input type="text" placeholder='Genre' value={genre} 
        onChange={(e)=>setGenre(e.target.value)} className='w-full px-3 py-2 border rounded-md 'required/>

        <label className='block text-sm font-medium mb-1'>Title</label>

        <input type="text" placeholder='Blog title' value={blogTitle} 
        onChange={(e)=>setblogTitle(e.target.value)} className='w-full px-3 py-2 border rounded-md 'required/>

        <label className='block text-sm font-medium mb-1'>Image</label>

        <input type="file" accept='image/*' onChange={handleImage} className='mb-3 border px-3 py-2 rounded-md w-full cursor-pointer' />

        {imagePreview && (
          <img src={imagePreview} alt="preview" className='max-w-4xl mx-auto object-cover h-52 rounded mb-3 border'/>
        )}

        <label className='block text-sm font-medium mb-1'>Content</label>

        <textarea name="" id="" placeholder='Blog content' value={blogContent}
        onChange={(e)=>setblogContent(e.target.value)} className='w-full mx-auto h-40 rounded mb-3 border' required></textarea>

        <button type='submit' className='w-full py-2 bg-blue-600 hover:bg-blue-700 transition font-medium text-white rounded cursor-pointer'>Create</button>
      </form>



    </div>
  )
}

export default CreateBlog;