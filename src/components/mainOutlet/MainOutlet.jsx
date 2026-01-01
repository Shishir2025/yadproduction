import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const MainOutlet = () => {
    return (
        <div className='bg-[#333333] text-white' >


            <Header />


            <div >
                <Outlet />

            </div>



            <Footer />


        </div>
    )
}

export default MainOutlet