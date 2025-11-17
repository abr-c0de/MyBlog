import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const DeleteBlog = async (blogId) =>{
    const conformDelete = window.confirm('Are you sure you want to delete this blog!');

    if(!conformDelete){
        return;
    }

    try{
        await deleteDoc(doc(db,'myblog',blogId));
        alert('Blog deleted successfully.');

    } catch (err) {
        console.log('cant delete blog',err);
        alert('Unable to delete blog.');
        
    }

}