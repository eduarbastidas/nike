import React from 'react'

const Navbar = ({imagen, nombre, descuento ,boton}) => {
  return (
    <div className='bg-gray-400 borde flex'>
        <div  className='w-[250px] h-[150px] '>
          <h1>{descuento}</h1>
         <h2>{nombre}</h2>
         <button className='bg-black text-white '>{boton}</button>
        </div>


        <div>
            <img src={imagen} alt="imagen" width="100px" height="100px"/>
        </div>
        
    </div>
  )
}

export default Navbar