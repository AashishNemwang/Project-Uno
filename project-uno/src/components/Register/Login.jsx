import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit= (e) =>{
        e.preventDefault()
        // console.log(loginData)

        axios.post("http://localhost:5500/login", loginData)
            .then((response) =>{
                if(response.data.statusCode === 200) {
                    alert("Login succesfull!!");
                } else{
                    alert(response.data.message)
                }
            })

            .catch((error) =>{
                console.error("there was an error", error)
                alert("Something went wrong. Please try again.");
            });
    }

    const handleChange= (e) =>{
        const {name, value} = e.target;
        setLoginData((prev) => ({...prev, [name]: value}));

    }



  return (
    <div>
        <form onSubmit={handleSubmit} action='' className='flex flex-col gap-4 p-14 w-[40%]'>


            <input onChange={handleChange} type="email" name="email" id='' placeholder="Enter Email"
            className='p-2 px-4 w-full border-b-2 border-black' value={loginData.email}
            />

            <input onChange={handleChange}  type="password" name="password" id='' placeholder="Enter Password"
            className='p-2 px-4 w-full border-b-2 border-black' value={loginData.password}
            />

            <button type='submit' className='p-2 px-4 bg-blue-500 rounded-md'>Login</button>

        </form>
      
    </div>
  )
}

export default Login