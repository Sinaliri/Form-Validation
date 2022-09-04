import React, { useState , useEffect } from 'react';
import { validate } from '../validate';
import { ToastContainer } from 'react-toastify';
import { notify } from '../toast';
import styles from "./Signup.module.css"
import imgsignup from "./../../img/signup.png"
  import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })
    const [errors,setErrors]=useState({});
    const [touch,setTouch]=useState({});


    useEffect(()=>{
        setErrors(validate(data));
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
            notify("Signed in successfully","success")
        }else{
            notify("invalid data","error")
            setTouch({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true,
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
                <h2>Sign Up</h2>
                <div className={styles.inputwrapper}>
                    <label>Name</label>
                    <input
                     className={(errors.name && touch.name ) && styles.uncompleted}
                     type="text"
                     name="name"
                     value={data.name} 
                     onChange={changeHandler} 
                     onFocus={touchHandler} />
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.inputwrapper}>
                    <label>Confirm Password</label>
                    <input 
                    className={(errors.confirmPassword && touch.confirmPassword )&& styles.uncompleted}
                    type="password" 
                    name="confirmPassword" 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={touchHandler}  />
                    {errors.confirmPassword && touch.confirmPassword && <span>{errors.confirmPassword}</span>}

                </div>
                <div className={styles.inputwrapper}>
                    <div className={styles.flex}>
                    <label>I accet terms of privacy policy</label>
                    <input 
                    className={(errors.isAccepted && touch.isAccepted )? styles.uncompleted : null}
                    type="checkbox" 
                    name="isAccepted" 
                    value={data.isAccepted} 
                    onChange={changeHandler} 
                    onFocus={touchHandler}  />
                    </div>
                    {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}

                </div>
                <div className={styles.buttoncontainer}>
                    <a href="#">Login</a>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
        </div>
    );
};

export default SignUp;

