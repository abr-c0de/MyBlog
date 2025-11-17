import { Route, Routes } from "react-router-dom"
import Home from "./HomePage/Home"
import SignUp from "./UserAuthentication/SignUP"
import SignIn from "./UserAuthentication/SignIn"
import Author from "./AuthorPage/Author"
import CreateBlog from "./CreateBlog/CreateBlog"
import './App.css'
import UpdateBlog from "./UpdateBlog/UpdateBlog"
import ReadMore from "./ReadMore/ReadMore"


function App() {
 

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/author" element={<Author/>}/>
        <Route path="/createblog" element={<CreateBlog/>} />
        <Route path="/updateblog/:blogId" element={<UpdateBlog/>}/> 
        <Route path="/readmore/:docid" element={<ReadMore/>}/>       
      </Routes>

    </>
  )
}

export default App
