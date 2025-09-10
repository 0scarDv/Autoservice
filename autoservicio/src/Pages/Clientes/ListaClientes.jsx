import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

import { RiDeleteBin5Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { ModalConfirm } from '../../Components/ModalConfirm';
import { FormClientes } from './FormClientes';


export const ListaClientes= () => {
  const [clientes, setClientes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [filtroNombreClientes, setfiltroNombreClientes] = useState('');

  const [selectedProductId, setSelectedProductId] = useState(null);

  const obtenerClientes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clientes');
      setClientes(response.data);
    } catch (error) {
      alert("Error al obtener los clientes");
    }
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/productos/${selectedProductId}`);
      // setProductos(productos.filter(producto => producto._id !== selectedProductId));
      obtenerProductos(); // Refrescar la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };
  const handleUpdate = async () => {
    try {

      set
      await axios.put(`http://localhost:3000/productos/${selectedProductId}`);
      // setProductos(productos.filter(producto => producto._id !== selectedProductId));
      obtenerProductos(); // Refrescar la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };


  const clientesFiltrados = clientes.filter(clientes => {
    return clientes.nombre.toLowerCase().includes(filtroNombreClientes); // Aquí puedes agregar la lógica de filtrado
  });

  const columns = [
    //{ name: "Id", selector: row => row._id, sortable: true },
    { name: "Nombre", selector: row => row.nombre, sortable: true },
    { name: "Apellido", selector: row => row.descripcion, sortable: true },
    
    { name: "Correo", selector: row => row.stock, sortable: true },
    { name: "celular", selector: row => row.stock, sortable: true },
    {
      name: "Acciones", cell: row => (
        <div className='flex flex-row gap-2'>
          <button className='text-[25px] text-gray-500 hover:text-red-500 cursor-pointer '
            onClick={() => {
              setOpenModalConfirm(true);
              setSelectedProductId(row._id);
            }}>

            <MdDeleteOutline />
          </button>

          <button
            className='text-[23px] text-gray-500 hover:text-sky-500 cursor-pointer'
            onClick={() => {
              setOpenModalEdit(true);
              console.log(openModalEdit);
              setSelectedProductId(row._id);

            }}
          >
            <FaRegEdit />
          </button>
        </div>
      )
    },
  ];

  return (
    <div className='w-full h-full flex flex-col'>
      <h1 className='ml-10 text-sky-600 text-[40px] m-4' >Todos los Clientes</h1>
      <div className='flex justify-between items-center pr-8 pl-10'>
        <input className='border-1 rounded-sm border-gray-400 h-[40px] w-[200px]' type="text" placeholder=' Buscar productos' value={filtroNombreClientes} onChange={(e) => setfiltroNombreProductos(e.target.value)} />


        <button onClick={() => { setOpenModal(true) }} className='rounded-sm bg-sky-500 shadow-lg text-white h-[40px] w-[200px]  hover:scale-110 cursor-pointer'>Agregar un producto</button>

      </div>
      <main className='w-full h-full flex rounded-lg pl-8 pt-4 '>

        <DataTable className='shadow-xl rounded-lg ' columns={columns} data={clientesFiltrados} />

      </main>
      {openModal && <FormClientes refrescarLista={obtenerClientes} open={openModal} onClose={() => setOpenModal(false)} />}
      {openModalConfirm && <ModalConfirm open={openModalConfirm} onClick={handleDelete} title={"Desea eliminar Producto?"} onClose={() => setOpenModalConfirm(false)} />}
      {openModalEdit && <EditProductos productoId={selectedProductId} refrescarLista={obtenerProductos} open={openModalEdit} onClick={handleUpdate} onClose={() => setOpenModalEdit(false)} />}
    </div>
  )

}