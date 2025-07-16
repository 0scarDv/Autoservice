import React from 'react'
import DataTable from 'react-data-table-component';
import { Outlet } from 'react-router-dom';
export const ListaClientes = () => {

    

    const data = [
        { id: 1, nombre: 'Juan', correo: 'juan@mail.com' },
        { id: 2, nombre: 'Ana', correo: 'ana@mail.com' },
    ]
    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Nombre', selector: row => row.nombre, sortable: true },
        { name: 'Correo', selector: row => row.correo, sortable: true },
    ];
    return (
        <div className='w-full h-full flex' >
            
            <div className='w-full h-full flex rounded-lg p-8 '>
                <DataTable className='shadow-xl rounded-lg ' data={data} columns={columns} />
            </div>
        </div>
    )
}
