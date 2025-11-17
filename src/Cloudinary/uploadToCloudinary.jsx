export const uploadToCloudinary = async (file) => {
  const cloudName = "dv21gxnm1";        
  const preset = "blog_preset";        

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", preset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: data
    }
  );

  const result = await res.json();
  return result.secure_url;   // Cloudinary image URL
};