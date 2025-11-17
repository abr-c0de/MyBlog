import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase';
import { uploadToCloudinary } from '../Cloudinary/uploadToCloudinary';
import { Link, useNavigate, useParams } from 'react-router-dom';
import arrowicon from '../assets/arrowicon.png';

function UpdateBlog() {
    const {blogId} = useParams();
    const navigate = useNavigate();

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [genre,setGenre] = useState('');
    const [image,setImage] = useState('');
    const [currentImg,setCurrentImg] = useState('');

    useEffect(()=>{

        const loadBlog = async() => {

            try{
            const BlogRef = doc(db,'myblog',blogId);
            const docRef = await getDoc(BlogRef);

            if(docRef.exists()){
                const Blog = docRef.data();

                setTitle(Blog.title);
                setContent(Blog.content);
                setGenre(Blog.genre);
                setCurrentImg(Blog.imageUrl);
            } else {
                console.log('no such blog');
                
            }

        } catch (err) {
            console.log('error fetching blog',err);
            
        }
        };
         loadBlog();

    },[blogId]);

    const handleUpdate = async(e) => {
        e.preventDefault();

        let imageUrl = currentImg;
        if(image){
            imageUrl = await uploadToCloudinary(image);
        }
        try{
            const blogRef = doc(db,'myblog',blogId);
            await updateDoc(blogRef,{
                title,
                content,
                imageUrl,
                genre,
            });
            alert('blog updated successfully');
            navigate('/author');

        } catch (err) {
            console.log('error updating',err);
            alert('error updating blog');
            
        }
    }


  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-200 h-80 overflow-y-scroll hide-scrollbar'>

        <Link to={'/author'} className='absolute top-4 left-5'><img src={arrowicon} alt="author" className='w-12 h-12'/></Link>

        <form onSubmit={handleUpdate} className='bg-white p-6 rounded-lg w-full max-w-lg space-y-4 shadow'>

            <h2 className='text-center font-bold text-2xl'>Update Blog</h2>

            <label className='block text-sm font-medium mb-1'>Genre</label>

            <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)} className='w-full px-3 py-2 border rounded-md'/>

            <label className='block text-sm font-medium mb-1'>Title</label>

            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full px-3 py-2 border rounded-md'/>

            <label className='block text-sm font-medium mb-1'>Image</label>

            <input type="file" accept='image/*' onChange={(e)=>setImage(e.target.files[0])} 
            className='mb-3 border px-3 py-2 rounded-md w-full cursor-pointer' />

            {image ? (
                <img src={URL.createObjectURL(image)} alt="image" className='max-w-4xl mx-auto object-cover h-52 rounded mb-3 border'/>
            ) : (
              currentImg && <img src={currentImg} alt="currentimage" className='max-w-4xl mx-auto object-cover h-52 rounded mb-3 border'/>
            )}

            <label className='block text-sm font-medium mb-1'>Content</label>

            <textarea name="" id="" value={content} onChange={(e)=>setContent(e.target.value)} 
            className='w-full mx-auto  h-40 rounded mb-3 border' ></textarea>

            <button type='submit' className='w-full py-2 bg-blue-600 hover:bg-blue-700 transition font-medium text-white rounded-sm
            cursor-pointer'>Edit</button>
        </form>
    </div>
  )
}

export default UpdateBlog;