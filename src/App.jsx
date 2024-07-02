import React, { useState } from 'react'
import Card from './componente/Card'
import img from './assets/zapato1.png'
import img2 from './assets/zapato2.png'
import img3 from './assets/Green1.png'
import Navbar from './componente/Navbar'
import Card2 from './componente/Card2'
import { MdHome } from "react-icons/md";
import img4 from './assets/zapato3.png'
import img5 from './assets/toppng.png'


const App = () => {
  const [estado, setEstado] = useState(false);
  const [precio, setPrecio] = useState();
  const [imagen, setImagen] = useState();
  const [nombre, setNombre] = useState();




  return (
    <div className='flex flex-col justify-center gap-10  '>
      <div className='flex justify-center  '>
        <Navbar boton={"Shop nowss"} descuento={"20% Discount"} nombre={"on your first purchase"} imagen={img3} />
      </div>


      <div className='flex items-center gap-10 flex-col '>

        <div className='flex'>
          <Card setNombre={setNombre} setImagen={setImagen} setEstado={setEstado} setPrecio={setPrecio} precio={"20.99"} imagen={img2} nombre={"Air Max 97"} />
          <Card setNombre={setNombre} setImagen={setImagen} setEstado={setEstado} setPrecio={setPrecio} precio={"25.99"} imagen={img} nombre={"React presto"} />

        </div>
      </div>
      <div className='flex items-center gap-7 flex-col'>
        <div className='flex'>
          <Card setNombre={setNombre} setImagen={setImagen} setEstado={setEstado} setPrecio={setPrecio} precio={"29.99"} imagen={img5} nombre={"Air Max"} />
          <Card setNombre={setNombre} setImagen={setImagen} setEstado={setEstado} setPrecio={setPrecio} precio={"27.99"} imagen={img4} nombre={"presto"} />

        </div>
      </div>


      <nav className='perfil flex  fixed bottom-0 justify-center w-screen  gap-10  bg-gray-300 '>
        <div className='text-[40px]'>

          <MdHome />
        </div>

        <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
        <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
        <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
      </nav>
      {estado && <Card2 setEstado={setEstado} setPrecio={precio} setImagen={imagen} setNombre={nombre} />}
    </div>

  )
}

export default App