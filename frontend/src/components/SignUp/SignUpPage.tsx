import React, { useState } from 'react'
import { HeaderPart } from '../HeaderPart'
import { FooterPart } from '../FooterPart'
import { useFormik } from 'formik'
import { EyeIcon } from '../Icons/EyeIcon'
import { EyeSlashIcon } from '../Icons/EyeSlashIcon'
import axios from 'axios'
import { CreatedSuccess } from '../CreatedSuccess'


export const SignUpPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [repeatIsVisible, setRepeatIsVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);


    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    const toggleRepeatIsVisible = () => {
        setRepeatIsVisible(!repeatIsVisible);
    }

    const validate = values => {
        // let errors = { name: '', email: '', phoneNumber: '', password: '', repeatPassword: '' }
        const errors = {};

        if (!values.name) {
            errors.name = 'Please enter your name'
        }
        if (!values.email) {
            errors.email = 'Please enter your email'
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Phone number required'
        }
        if (!values.password) {
            errors.password = 'Please enter your password'
        } else if (values.password.length < 8) {
            errors.password = 'Your password must be at least 8 characters'
        }
        if (!values.repeatPassword) {
            errors.repeatPassword = 'Required'
        } else if (values.password !== values.repeatPassword) {
            errors.repeatPassword = 'Your passwords must match'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            repeatPassword: '',
        },

        validate,

        onSubmit: async values => {
            console.log('values', values);
            try {
                const res = await axios.post('http://localhost:8000/signUp', values);
                console.log('data', res.data)
                if (res.status === 200) {
                    setSuccessMessage(true);

                    values.name = ''
                    values.email = ''
                    values.phoneNumber = ''
                    values.password = ''
                    values.repeatPassword = ''
                }
            } catch (error) {
                console.error(error)
            }
        }
    })
    return (
        <>
            <HeaderPart />
            <div className='flex flex-col justify-center items-center w-[1440px] px-10 m-auto mt-20 mb-32'>
                {successMessage && <CreatedSuccess />}
                <form onSubmit={formik.handleSubmit} className='w-[448px] h-[549px] p-8 flex flex-col gap-12 items-center'>
                    <h1 className='text-2xl font-bold text-[#0D1118]'>Бүртгүүлэх</h1>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm'>Нэр</p>
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
                            <p className='text-sm'>И-мэйл</p>
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
                        <div className='flex flex-col gap-1 relative'>
                            <p className='text-sm'>Phone Number</p>
                            <input
                                name="phoneNumber"
                                type="text"
                                placeholder='Insert your phone number'
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                                className='w-full h-12 border text-base px-4 py-2 rounded-md '
                            />
                            {formik.errors.phoneNumber && formik.touched.phoneNumber ? <div className='text-red-500 '>{formik.errors.password}</div> : null}
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <p className='text-sm'>Нууц үг</p>
                            <input
                                name="password"
                                type={isVisible ? "text" : "password"}
                                placeholder='Нууц үгээ оруулна уу'
                                onChange={formik.handleChange}

                                value={formik.values.password}
                                className='w-full h-12 border text-base px-4 py-2 rounded-md '
                            />
                            <button onClick={toggleVisibility} className='absolute right-2 top-9'>{isVisible ? <EyeSlashIcon /> : <EyeIcon />}</button>
                            {formik.errors.password && formik.touched.password ? <div className='text-red-500 '>{formik.errors.password}</div> : null}
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <p className='text-sm'>Нууц үг давтах</p>
                            <input
                                name="repeatPassword"
                                type={repeatIsVisible ? "text" : "password"}
                                placeholder='Нууц үгээ оруулна уу'
                                onChange={formik.handleChange}
                                value={formik.values.repeatPassword}
                                className='w-full h-12 border text-base px-4 py-2 rounded-md'
                            />
                            <button onClick={toggleRepeatIsVisible} className='absolute right-2 top-9'>{repeatIsVisible ? <EyeSlashIcon /> : <EyeIcon />}</button>
                            {formik.errors.repeatPassword && formik.touched.repeatPassword ? <div className='text-red-500 '>{formik.errors.repeatPassword}</div> : null}
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <button type="submit" className={`w-full h-12 px-4 py-2 border flex justify-center rounded-md ${formik.values.name && formik.values.email && formik.values.password && formik.values.repeatPassword ? 'bg-main text-white' : 'border-main'}`}>
                            Бүртгүүлэх
                        </button>
                    </div>
                </form >
            </div >
            <FooterPart />
        </>
    )
}
