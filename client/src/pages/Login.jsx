import React from 'react'
import '../css/Login.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login() {
  let navigate = useNavigate()

  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(5).max(20).required(),
    password: Yup.string().min(5).max(20).required()
  })

  return (
    <div className="loginContainer">
      <div className='loginImg'>
        <img src="images/login-logistics.svg"/>
      </div>
      <div className='loginInput'>
        <Formik initialValues={initialValues} validationSchema={validationSchema}>
          <Form className='loginForm'>
              <img src="images/profile.png" className="avatar"/>
              <div className="welcome">WELCOME</div>
              <label>Username:</label>
              <ErrorMessage name="username" component="span" />
              <Field autoComplete="off" name="username" placeholder="(Ex. johnsmith...)" className="field" />
              <label>Password:</label>
              <ErrorMessage name="password" component="span" />
              <Field autoComplete="off" name="password" placeholder={"(Ex. password123...)"} type="password" className="field"/>

              <button type="submit" className="loginButton">LOGIN</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login
