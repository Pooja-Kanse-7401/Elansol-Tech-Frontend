import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { FaCircleUser } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Required'),
    }),
    onSubmit: async (values) => {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/login', values)
      const mainData = response.data
      console.log(mainData.token)
      localStorage.setItem('token', mainData.token)
      window.alert('Login Successful');
      navigate('/dashboard')
    }
  })

  return (
    <div className='bg-slate-200 h-[100vh] w-[100%] flex justify-center items-center flex-col'>
      <form onSubmit={formik.handleSubmit} className='relative h-[60%] w-[40%] flex justify-start gap-4 pt-14 items-center flex-col rounded-md bg-gradient-to-r from-cyan-200 to-blue-200'>
        <h1 className='text-3xl p-4 absolute bottom-96 bg-cyan-500 text-white rounded-md font-semibold'>Login</h1>
        <FaCircleUser className='text-8xl text-cyan-500'/>
        <div className='w-[60%]'>
          <input type="email" name="email" id="email"
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='p-3 px-4 rounded-md w-[100%]'
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className='w-[60%]'>
          <input type="password" name="password" id="password"
            placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='p-3 px-4 rounded-md w-[100%]'
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type='submit' className='p-2 rounded-md bg-cyan-500 text-white w-[60%] font-semibold text-xl hover:bg-cyan-700'>Login</button>
      </form>
    </div>
  )
}

export default Login
