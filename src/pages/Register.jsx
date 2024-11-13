import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Register = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Password must have at keast 6 characters')
                .required('Required'),
        }),
        onSubmit : async (values) => {
            try {
                const response = await axios.post('http://127.0.0.1:5000/api/v1/register', values)
                // toast.success(response.date.message)
                alert(response.data.message)
            }
            catch (error) {
                alert(error.response.date.error)
            }
        }
    })

    return (
        <div className='bg-slate-200 h-[100vh] w-[100%] flex justify-center items-center flex-col'>
            <form action="" onSubmit={formik.handleSubmit} className='relative h-[60%] w-[40%] flex justify-start gap-4 pt-14 items-center flex-col rounded-md bg-gradient-to-r from-cyan-200 to-blue-200'>
            <h1 className='text-3xl p-4 absolute bottom-96 bg-cyan-500 text-white rounded-md font-semibold'>Register</h1>
                <div className='w-[60%]'>
                    <input type="text" name="username" id="username"
                        placeholder='Username'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-3 px-4 rounded-md w-[100%]'
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div style={{color: 'red'}}>{formik.errors.username}</div>
                    ) : null}
                </div>

                <div className='w-[60%]'>
                    <input type="email" name="email" id="email"
                        placeholder='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-3 px-4 rounded-md w-[100%]'
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div style={{color: 'red'}}>{formik.errors.email}</div>
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
                        <div style={{color: 'red'}}>{formik.errors.password}</div>
                    ) : null}
                </div>

                <input type="submit" value="Send" className='p-2 rounded-md bg-cyan-500 text-white w-[60%] font-semibold text-xl hover:bg-cyan-700'/>
            </form>
        </div>
    )
}

export default Register
