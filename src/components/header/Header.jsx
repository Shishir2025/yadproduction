import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/imgs/logo.png'


const Header = () => {
    return (
        <div>

            <div className='pl-10'> <a href=""> yaadproduction.np@gmail.com </a> </div>



            <div className='flex justify-evenly h-10 bg-white text-2xl text-black items-center'>
                <img className='w-15' src={logo} alt="" />



                <nav className='flex  space-x-5'>

                    <Link  >HOME</Link>

                    <Link  >SERVICES</Link>

                    <Link  >ABOUT</Link>

                    <Link  >HOME</Link>





                </nav>


                <button>Register</button>
            </div>




        </div>
    )
}

export default Header