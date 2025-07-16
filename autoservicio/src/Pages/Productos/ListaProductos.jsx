import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { FormProductosModal } from './FormProductosModal';
export const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [filtroNombreProductos, setfiltroNombreProductos] = useState('');

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3000/productos');
        setProductos(respuesta.data);

      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    }
    obtenerProductos();
  }, []);

  const productosFiltrados = productos.filter(producto => {
    return producto.nombre.toLowerCase().includes(filtroNombreProductos); // Aquí puedes agregar la lógica de filtrado
  });
  const columns = [
    //{ name: "Id", selector: row => row._id, sortable: true },
    { name: "Nombre", selector: row => row.nombre, sortable: true },
    { name: "Descripcion", selector: row => row.descripcion, sortable: true },
    { name: "Precio", selector: row => row.precioPorKilo, sortable: true },
    { name: "Cantidad", selector: row => row.stock, sortable: true },
  ]
  return (
    <div className='w-full h-full flex flex-col'>
      <h1 className='ml-10 text-sky-600 text-[40px] m-4' >Todos los Productos</h1>
      <div className='flex justify-between items-center pr-8 pl-10'>
        <input className='border-1 rounded-sm border-gray-400 h-[40px] w-[200px]' type="text" placeholder=' Buscar productos' value={filtroNombreProductos} onChange={(e) => setfiltroNombreProductos(e.target.value)} />

        <button onClick={() => { setOpenModal(true) }} className='rounded-sm bg-sky-500 shadow-lg text-white h-[40px] w-[200px]'>Agregar un producto</button>

      </div>
      <main className='w-full h-full flex rounded-lg pl-8 pt-4 '>

        <DataTable className='shadow-xl rounded-lg ' columns={columns} data={productosFiltrados} />

      </main>
      {openModal && <FormProductosModal open={openModal} onClose ={() => setOpenModal(false)} />}
    </div>
  )

}