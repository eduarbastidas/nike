import React, { useState }   from 'react'
import nike from '../assets/NIKE.png'
import Menu from './Menu'
import { MdOutlineShoppingBag } from "react-icons/md";
import caja from '../assets/caja.png'
import { FaChevronDown } from "react-icons/fa";




const Card2 = ({ setEstado, setPrecio, setImagen, setNombre, }) => {
    const [colorFilter, setColorFilter] = useState();
   
    

    const azul = () => {
        setColorFilter('hue-rotate(200deg)');
    };

    const rojo = () => {
        setColorFilter('hue-rotate(670deg)');
    };
    const negro = () => {
        setColorFilter('hue-rotate(100deg)');
    };

    return (
        <div className='absolute flex flex-col bg-white top-0 w-screen h-[1200px]'>
            <Menu   setEstado={setEstado}  />
            <div>
                <div className='flex justify-center'>
                    <h2 className='text-'><strong>{setNombre}</strong></h2>
                </div>
                <div className='flex flex-col  justify-around w-screen items-center gap-1 ml-1'>
                    <div className='flex  justify-around w-screen items-center gap-1 ml-1'>
                    <div>
                        <h1 > <strong>Size</strong></h1>
                        <div className='flex flex-col gap-8'>
                            <h2 className='border border-black cuadrito'><strong> Uk 5</strong></h2>
                            <h2 className='border border-black cuadrito'><strong>Uk 7</strong></h2>
                            <h2 className='border border-black cuadrito'><strong>Uk 8</strong></h2>
                            <h2 className='border border-black cuadrito'><strong>Uk 9</strong></h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='w-[200px]'>
                            <img className='fixed top-[80px] z-0 left-[140px] w-[80px]' src={nike} alt="" />
                            <img className='fixed top-[80px] left-[1px]   w-[300px]' src={setImagen} alt="" style={{ filter: colorFilter }} />
                        </div>
                       
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                        </svg>
                        <h1 className=''>Color</h1>
                        <div onClick={azul} className='bg-black w-[20px] h-[20px]'>
                            <div className='w-[20px] h-[20px] bg-[#10f]'></div>
                        </div>
                        <div onClick={rojo} className='bg-black w-[20px] h-[20px]'>
                            <div className='w-[20px] h-[20px] bg-red-600'></div>
                        </div>
                        <div onClick={negro} className='bg-black w-[20px] h-[20px]'>
                            <div className='w-[20px] h-[20px] bg-green-700'></div>
                        </div>
                        </div>
                    <div className=' precio  flex flex-col justify-start absolute  '>
                    <h2 className='text-[40px]'><strong>${setPrecio}</strong></h2>
                    <h5 className='text-red-600 '><strong>10% OFF</strong></h5>
                    </div>
                    </div>

                   
                    <div className='flex flex-col items-center logo2'>
                        <h3><strong>Swipe down to add</strong></h3>
                        <div className=' border border-black logo ' >
                        <MdOutlineShoppingBag  className=' w-[50px] h-[60px]  bolso '/>
                        <FaChevronDown className='flecha w-[70px] h-[40px] ' />
                        <FaChevronDown className='fle w-[70px] h-[40px]'/>
                        <FaChevronDown className='flec w-[70px] h-[40px]'/>
                        </div>
                    </div>
                    <div>
                        <img src={caja} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card2;
