import React, { useState , useEffect } from 'react';
import { validate } from '../validate';
import { ToastContainer } from 'react-toastify';
import { notify } from '../toast';
import styles from "./../../components/SignUp/Signup.module.css"

import imgsignup from "./../../img/signup.png"
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [errors,setErrors]=useState({});
    const [touch,setTouch]=useState({});


    useEffect(()=>{
        setErrors(validate(data,"Login"));
        console.log(errors)
    }, [data, touch])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
        console.log(data)
    }
    const touchHandler=(event)=>{
        setTouch({ ...touch, [event.target.name]:true})
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        if(!Object.keys(errors).length){
            console.log(data)
            notify("Logged in successfully","success")
        }else{
            notify("invalid data","error")
            setTouch({
                email:true,
                password:true,
            
            })
        }
    }
    return (
        <div className={styles.container}>
        <div className={styles.imgwrapper}>
            <img src={imgsignup} alt="sign up"/>
        </div>
        <div className={styles.formContainer}>
            <form onSubmit={submitHandler} className={styles.form}>
                <h2>Login</h2>
 
                <div className={styles.inputwrapper}>
                    <label>Email</label>
                    <input 
                    className={(errors.email && touch.email ) && styles.uncompleted }
                    type="text" 
                    name="email" 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={touchHandler}  />
                    {errors.email && touch.email && <span>{errors.email}</span>}

                </div>
                <div className={styles.inputwrapper}>
                    <label>Password</label>
                    <input 
                    className={(errors.password && touch.password ) && styles.uncompleted}
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={touchHandler}  />  
                    {errors.password && touch.password && <span>{errors.password}</span>}

                </div>


                <div className={styles.buttoncontainer}>
                    <Link to="/SignUp">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
        </div>
    );
};

export default Login;

