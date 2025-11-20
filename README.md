# 📘 myBlog (React + Firebase + Cloudinary)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="45" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" width="45" />
  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" width="45" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudinary/cloudinary-plain.svg" width="60" />

</p>

A fully functional, responsive blog application built with **React.js**, **Tailwind CSS**, **Firebase**, and **Cloudinary**.  
Users can create, edit, delete, and read blogs, with authentication and author-only features.

---

## 📖 Table of Contents

- [🚀 Tech Stack](#-tech-stack)  
- [✨ Features](#-features)  
- [📂 Folder Structure](#-folder-structure)  
- [🛠️ Installation & Run Locally](#-installation--run-locally)  
  
---

## 🚀 Tech Stack

### Frontend
- **React.js** – UI & components  
- **React Router DOM** – Page navigation  
- **Tailwind CSS** – Modern, utility-first styling  

### Backend / Services
- **Firebase Authentication** – Sign up / login / logout  
- **Firebase Firestore** – Realtime NoSQL database  
- **Cloudinary** – Image upload & storage (Blog cover images)  

---

## ✨ Features

### 👥 User Authentication
- Sign Up, Sign In, Log Out  
- User-specific data handled securely  
- Author profile shows only author’s blogs  

### 📝 Blog Management (CRUD)
- Create a new blog  
- Read full blog on a dedicated page  
- Update blog (only author)  
- Delete blog (only author)  
- Upload blog images via Cloudinary  

### 🏠 Home Page
- Displays all blogs from all users  
- Sorted by **latest first**  
- “Read More” button navigates to the blog details page  

### 👤 Author Dashboard
- Shows blogs created by the logged-in author  
- Options to **Edit** or **Delete**  
- Clean, simple & responsive layout  

### 📱 Fully Responsive
- Works on mobile, tablet, and desktop  
- Tailwind makes layout smooth and modern  

---

## 📂 Folder Structure


src/
│── assets/                # Images, icons, logos used in the app
│── AuthContext/           # Context for managing user authentication state
│── AuthorPage/            # Components/pages for author dashboard
│── BlogCard/              # Reusable blog card component
│── Cloudinary/            # Cloudinary upload utility/components
│── CreateBlog/            # Components for creating a blog
│── DeleteBlog/            # Components for deleting a blog
│── Firebase/              # Firebase configuration and helpers
│── HomePage/              # Home page component showing all blogs
│── ReadMore/              # Component/page for full blog details
│── UpdateBlog/            # Component for editing/updating a blog
│── UserAuthentication/    # Components for SignIn, SignUp, Logout
│── App.css                # Main CSS file
│── App.jsx                # Main React component
│── index.css              # Tailwind / global styles
└── main.jsx               # React entry point

---

## 🛠️ Installation & Run Locally

1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/your-username/your-blog-repo.git
cd your-blog-repo
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Add Firebase config
Inside /Firebase/firebaseConfig.js:

js
Copy code
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
4️⃣ Add Cloudinary upload preset
In your Cloudinary account:

Create Unsigned Upload Preset

Copy cloud_name and upload_preset

5️⃣ Run the project
bash
Copy code
npm run dev