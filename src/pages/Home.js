import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { roomCodeValidation } from '../helper/validate';
import logo from '../assets/images/logo2.png';
import hm1 from '../assets/images/hm2.jpg';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues : {
        roomCode : ''
        },
        validate : roomCodeValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            navigate(`/room/${values.roomCode}`)
        }
    })

    // logout handler function
    function userLogout(){
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <>
            <header>
                <nav id="header_" className="fixed top-0 left-0 z-20 w-full transition-all ease-in">
                    <div className="container m-auto px-6 md:px-12 lg:px-6">
                        <div className="flex flex-wrap items-center justify-between py-6 md:py-4 md:gap-0">
                            <div className="w-full flex items-center justify-between lg:w-auto">
                                <a href="#" aria-label="logo">
                                    <img src={logo} className="w-36" alt="tailus logo" width="144" height="48" />
                                </a>

                                <div className="block max-w-max">
                                    <button aria-label="humburger" id="hamburger" className="block relative h-auto lg:hidden">
                                        <div aria-hidden="true" id="line" className="m-auto h-0.5 w-6 rounded bg-gray-100 transition duration-300"></div>
                                        <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-100 transition duration-300"></div>
                                    </button>
                                </div>
                            </div>

                            <div id="navbar" className="flex h-0 lg:h-auto overflow-hidden lg:flex lg:pt-0 w-full md:space-y-0 lh:p-0 md:bg-transparent lg:w-auto transition-all duration-300">
                                <div id="navBox" className="w-full p-6 lg:p-0 bg-white bg-opacity-40 backdrop-blur-md lg:items-center flex flex-col lg:flex-row lg:bg-transparent transition-all ease-in">
                                    <ul className="space-y-6 pb-6 tracking-wide font-medium text-gray-800 lg:text-gray-100 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
                                        <li>
                                            <Link to="/profile" className="block md:px-3">
                                                <strong>MY SETTINGS</strong>
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="block md:px-3" onClick={userLogout}>
                                                <strong>LOGOUT</strong>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>

            <div className="relative">
                <Toaster position='top-center' reverseOrder={false}></Toaster>

                <img className="absolute inset-0 w-full h-full object-cover object-top" src={hm1} width="400" height="500" alt="hero background image" />
                <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-30 backdrop-blur-sm"></div>

                <div className="relative container m-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-12 pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
                        <h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
                            Connect with business partners, families & friends in real time!
                        </h1>

                        <form className="w-full" onSubmit={formik.handleSubmit}>
                            <div className="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
                                <input placeholder="Enter room code" className="w-full p-4 outline-none text-gray-600" type="text" {...formik.getFieldProps('roomCode')} />

                                <button type="submit" title="Start video call" className="ml-auto py-3 px-6 rounded-lg text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12">
                                    <span className="hidden text-white font-semibold md:block">
                                        Create
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-white md:hidden bi bi-search" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="pb-16">
                        <div className="md:px-12">
                            <span className="block text-center font-medium text-pink-50">Trusted by your favorite giants</span>
                            <div className="mt-8 -mx-6 px-6 overflow-x-auto md:overflow-x-hidden">
                                <div className="w-max flex justify-center flex-wrap items-center gap-4 md:w-auto md:gap-6 lg:gap-8">
                                    <div className="flex items-center">

                                    </div>
                                    <br /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home