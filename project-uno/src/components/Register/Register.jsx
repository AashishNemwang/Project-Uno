import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
     });

     const [message, setMessage] = useState()
     console.log(message)


     const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(formData);
        //axios contain path and formData
        axios.post("http://localhost:5500/post",formData)

        //if data is present
        .then((response)=>{
          setMessage(response.data.message)

        })

        //to catch error
        .catch((error)=>{
          alert(error)
        })
     };


     const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prev) =>({...prev, [name]: value}));
     }



  return (
    <div className='grid place-items-center h-[100vh]'>
        {message&&
        <h1 className='text-green-500'>{message}</h1>}

        <form onSubmit ={handleSubmit} action='' className='flex flex-col gap-4 p-14 w-[40%]'>
            <h1 className='text-4xl font-bold' >Register</h1>
            <input onChange={handleChange} type="text" name="name" id='' placeholder="Enter Name"
            className='p-2 px-4 w-full border-b-2 border-black' value={formData.name}
            />

           {/* for inline
            */}
            {/* <input onChange={(e.) =>{setFormData((prev)=>({...prev, name:value}))}} type="text" name="name" id='' placeholder="Enter Name"
            className='p-2 px-4 w-full border-b-2 border-black' value={formData.name}
            /> */}

            <input onChange={handleChange} type="email" name="email" id='' placeholder="Enter Email"
            className='p-2 px-4 w-full border-b-2 border-black' value={formData.email}
            />
            <input onChange={handleChange} type="password" name="password" id='' placeholder="Enter Password"
            className='p-2 px-4 w-full border-b-2 border-black' value={formData.password}
            />
            <input onChange={handleChange} type="password" name="re_password" id='' placeholder="Re-enter your password"
            className='p-2 px-4 w-full border-b-2 border-black' value={formData.re_password}
            />

            <button type='submit' className='p-2 px-4 bg-blue-500 rounded-md'>Submit</button>

        </form>
      
    </div>
  )
}

export default Register