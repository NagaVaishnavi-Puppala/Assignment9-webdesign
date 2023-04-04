// import { PromiseProvider } from "mongoose";
import React, {useState} from "react"
import { Navigate } from "react-router-dom";

export default function Login(props){
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [navigate, setNavigate] = useState(false);

    const handleSubmit = async () => {
        console.log("submit bef 1", email, password);
        const requestOptions= {
            method:"POST",
            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password
                
            })
        }
        try{
        const response = await fetch("http://localhost:8080/user/login",requestOptions)
        //console.log(response);
        if(response.ok){
            const data = await response.json()
            console.log(data);
            setNavigate(true);
            alert("User Login Succesful");
        }else{
            setNavigate(false);
            alert("User Login Failed. Please Enter correct credentials "); 
        }
    }
        catch(err){
            console.log(err)
            alert("User Login Failed. Please Enter correct credentials ");
        }

        
        
        // .then((res)=>res.json())
        // .then((data)=>{
        //     if(data.message==="login success"){
        //         console.log("login worked");
        //         setNavigate(true);
        //     }
            
        // })
    }

    return (
        <>
        {navigate?<Navigate to="/home"/>:""}
        <div> 
            <img src="../job-portal-lettering-logo-design-template-concept-vector-37017445.png" alt="" />
            <h1 className="loginheading"> WELCOME TO  LOGIN PAGE </h1>
            <label >Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type = "email" placeholder="your email" id='email' name = 'email' size={'100px'} />
            <label >Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type = "password" placeholder=" ********" id='password' name = 'password' />
       
            <button onClick={async() => await handleSubmit()} type = "submit">Login</button>

        </div>
        <div class="col-lg-6">
        <div>
        <h6 class="sub-heading1"> Please login to continue
        </h6>
         <img src="../tutsplus-icon.png" alt="preview" />
          <h1>We're here to hire. We're here to help.
</h1>
<p>JobEasy is a career accelerator marketplace where educators take part in their students' financial outcomes. We have software and services allowing educators to enable the ISA model and improve the success of their students. Students learn and get simple jobs first (QA or tech support), and then they return for more advanced bootcamps like Test Automation, DevOps, etc.

Our team solves the major problem of the current education system where most education remains theoretical and students are not prepared for the job market while accumulating the debt. A new model of career acceleration in which we invest in the trainees, instead of the other way around.</p>
          
        </div>
      </div>
        </>
    )
}
