import React from 'react'
import { HeaderPart } from '../HeaderPart'
import { FooterPart } from '../FooterPart'
import { useFormik } from 'formik'

export const SignUpPage = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        validate: values => {
            let errors = { name: '', email: '', password: '', repeatPassword: '' }

            if (!values.name) {
                errors.name = 'Please enter your name'
            }
            if (!values.email) {
                errors.email = 'Please enter your email'
            }
            if (!values.password) {
                errors.password = 'Please enter your password'
            } else if (values.password.length < 8) {
                errors.password = 'Your password must be at least 8 characters'
            }
            if (!values.repeatPassword) {
                errors.repeatPassword = 'Required'
            } else if (values.password !== values.repeatPassword) {
                errors.repeatPassword = 'Your passwords do not match'
            }

            return errors;
        },

        onSubmit: values => {
            console.log('values', values)
        }
    })
    return (
        <>
            <HeaderPart />
            <div className='flex justify-center items-center w-[1440px] px-10 m-auto mt-20 mb-16'>
                <form onSubmit={formik.handleSubmit} className='w-[448px] h-[549px] p-8 flex flex-col gap-12 items-center'>
                    <h1 className='text-2xl font-bold text-[#0D1118]'>Бүртгүүлэх</h1>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm'>Name</p>
                            <input
                                name="name"
                                type="text"
                                placeholder='Нэрээ оруулна уу'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className='w-full h-12 border text-base px-4 py-2 rounded-md'
                            />
                            {formik.errors.name && formik.touched.name ? <div className='text-red-500 '>{formik.errors.name}</div> : null}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm'>E-mail</p>
                            <input
                                name="email"
                                type="email"
                                placeholder='И-мэйл хаягаа оруулна уу'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className='w-full h-12 border text-base px-4 py-2 rounded-md'
                            />
                            {formik.errors.email && formik.touched.email ? <div className='text-red-500 '>{formik.errors.email}</div> : null}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm'>Password</p>
                            <input
                                name="password"
                                type="password"
                                placeholder='Нууц үгээ оруулна уу'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className='w-full h-12 border text-base px-4 py-2 rounded-md'
                            />
                            {formik.errors.password && formik.touched.password ? <div className='text-red-500 '>{formik.errors.password}</div> : null}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm'>Repeat Password</p>
                            <input
                                name="repeatPassword"
                                type="password"
                                placeholder='Нууц үгээ оруулна уу'
                                onChange={formik.handleChange}
                                value={formik.values.repeatPassword}
                                className='w-full h-12 border text-base px-4 py-2 rounded-md'
                            />
                            {formik.errors.repeatPassword && formik.touched.repeatPassword ? <div className='text-red-500 '>{formik.errors.repeatPassword}</div> : null}
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <button type='submit' className='w-full h-12 px-4 py-2 border border-main flex justify-center rounded-md'>
                            Бүртгүүлэх
                        </button>
                    </div>
                </form >
            </div >
            <FooterPart />
        </>
    )
}