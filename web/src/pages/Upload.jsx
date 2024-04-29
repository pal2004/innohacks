import React from 'react';
import Navbar from "../components/Navbar";
import { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
const Upload = () => {
    const [file, setFile] = useState(null);

  // Function to handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);  // Set the file to state
  };

  // Function to handle file upload on form submission
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the default form submission

    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);  // Append file captured to FormData object

    // Here you would typically make an HTTP request to the server
    // For this example, let's just log to the console
    console.log('Uploading File:', file);
    // Example: you could use fetch or axios to send this to a server endpoint
    // axios.post('/api/upload', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   }
    // });

    alert('File ready to be uploaded: ' + file.name);
  };
  return (
    <div className=''>
      <Navbar/>
      <div className='bg-[#13192a] w-[100vw] h-[90.5vh] flex justify-center items-center  '>
        <div className='text-white bg-[#3a5387] h-[500px] w-[800px] flex justify-center items-center border  border-dashed rounded-xl'>
            <form className='flex flex-col  gap-5' onSubmit={handleSubmit}>
                <div className='self-center justify-center items-center'>
                    <label >Upload file:
                    <IoCloudUploadOutline size={60} ><input type="file" onChange={handleFileChange} />  </IoCloudUploadOutline > 
      </label></div>
      
      <button type="submit" className='bg-[#13192a] text-white w-[150px] py-3 rounded-md self-center'>Upload File</button>
    </form></div>
      </div>
    </div>
  )
}

export default Upload;
