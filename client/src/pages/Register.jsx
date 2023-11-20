import React from 'react'
import '../css/Register.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {
  let navigate = useNavigate()

  const initialValues = {
    company: '',
    storeLocation: '',
    name: '',
    username: '',
    password: ''
  }

  const validationSchema = Yup.object().shape({
    company: Yup.string().required(),
    storeLocation: Yup.string().required(),
    name: Yup.string().required(),
    username: Yup.string().min(5).max(20).required(),
    password: Yup.string().min(5).max(20).required()
  })

  return (
    <div className="loginContainer">
      <div className='loginImg'>
        <img src="images/register-box.svg"/>
      </div>
      <div className='loginInput'>
        <Formik initialValues={initialValues} validationSchema={validationSchema}>
          <Form className='loginForm'>
              <img src="images/profile.png" className="avatar"/>
              <div className="welcome">REGISTER</div>
              <label>Company:</label>
              <ErrorMessage name="company" component="span" />
              <Field autoComplete="off" name="company" placeholder="(Ex. InvoFind...)" className="field" />
              <label>Store Location:</label>
              <ErrorMessage name="storeLocation" component="span" />
              <Field autoComplete="off" name="storeLocation" placeholder="(Ex. 1...)" className="field"/>
              <label>Full Name:</label>
              <ErrorMessage name="name" component="span" />
              <Field autoComplete="off" name="name" placeholder="(Ex. John Smith...)" className="field" />
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

export default Register
