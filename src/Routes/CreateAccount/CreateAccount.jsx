import React from 'react';
import Container  from '../../Utils/Container';
import LogoImg from '../../images/450px-EBay_logo.svg.png';
import { Link } from 'react-router-dom';
import './CreatAccount.scss';
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../../../src/FireBase/FireBaseconfig';
import { signInWithPopup } from 'firebase/auth';
import instance from '../../api/instance';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

const [ formData, setFormData ] = useState({
  email: "",
  password: "",
  name: "",
  avatar: ""
})



const createUserWithEmail = (e) => {
  e.preventDefault();
  instance.post("/users/", formData)
  .then(responce => { 
    if (responce.data){
      dispatch({
        user: responce.data,
        type: "CREATE_USER"
      })
    }
   navigate('/')
  }) 
  .catch(err => console.log(err))
}

  const createAccountWithGoogle = () => {
    signInWithPopup( auth, provider)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    
  }

  const [isParol, setIsParol] = useState()

  const toggle = (e) => {
    e.preventDefault(); 
    setIsParol(prevState =>!prevState);
  }



  return (
    <section>
      <Container>
        <div className='creat_account'>
          <div className='creat_account_header'>
            <Link to="/">
              <img src={LogoImg} alt="img" />
            </Link>
            <div>
              <h4>Already a member?</h4>
              <Link to='/signin'>
                <span>Sign in</span>
              </Link>
            </div>
          </div>
          <div className='creat_account_title'>
            <h4>Create an account</h4>
          </div>
          <div className='creat_account_form_box'>
            <div>
              <form onSubmit={createUserWithEmail} className='form_creat_account' action="">
                <label htmlFor="">
                  <input onChange={ e => setFormData({...formData, name: e.target.value})} className='form_creat_account_firstname' type="text" placeholder='First name' />
                  <input className='form_creat_account_lastname' type="text" placeholder='Last name' />
                </label>
                <br />
                <input onChange={ e => setFormData({...formData, email: e.target.value})} className='form_creat_account_email' type="text" placeholder='Email' />
                <br />
                <input onChange={ e => setFormData({...formData, avatar: e.target.value})} className='form_creat_account_email' type="url" placeholder='Avatar' />
                <div className='auth--parol'>
                  <input onChange={ e => setFormData({...formData, password: e.target.value})}  type={ isParol ? "text" : "password"} placeholder='Password'/>
                  <button onClick={toggle}>
                    {isParol ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}            
                  </button>
                </div>
                <span className='form_creat_account_span'>
                  By Creating an account, you agree to our User <br /> Agreement  and acknowledge reading our User <br /> Privacy Notice .
                </span>
                <button className='form_creat_account_button'>Create account</button>
              </form>
            </div>
            <div className='creat_account_form_box_hr_box'>
              <div className='creat_account_form_box_hr'></div>
              <div className='creat_account_form_box_hr_title'>or</div>
              <div className='creat_account_form_box_hr'></div>
            </div>
            <div className='creat_account_form_box_bygoogle'>
              <FcGoogle className='creat_account_form_box_bygoogle_icon' />
              <button onClick={createAccountWithGoogle} className='creat_account_form_box_bygoogle_btn'>Continue with Google</button>
            </div>
          </div>
          
        </div>
      </Container>
    </section>  
  )
}

export default CreateAccount