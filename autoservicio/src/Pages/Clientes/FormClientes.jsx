
import axios from 'axios';
import React, { useState } from 'react'

export const FormClientes = ({ open, onClose,refrescarLista }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [unidadKilo, setUnidadKilo] = useState('unidad');
    const [stock, setStock] = useState('');
    const [activo, setActivo] = useState(true);


    const guardarProductos = async () => {
        const nuevoProducto = {
            nombre,
            descripcion,
            precioPorKilo: parseFloat(precio),
            unidad: unidadKilo,
            stock: parseInt(stock, 10),
            activo
        };
        try {
            const respuesta = await axios.post('http://localhost:3000/productos', nuevoProducto)
            console.log("Producto creado", respuesta.data);
            onClose();
            refrescarLista();
        } catch (error) {
            console.log("Error al crear producto", error);
        }
    };





    if (!open) return null
    return (
        <div className='z-30 bg-black/75 w-full h-full fixed top-0 left-0 flex items-center justify-center'>
            <div className='z-40 bg-white p-6 rounded-lg shadow-lg w-96 space-y-4'>
                <h2 className="text-xl font-bold text-gray-700">Agregar Cliente</h2>

                <input type="text" name="nombre" placeholder="Nombre"

                    className="w-full border px-3 py-2 rounded"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <textarea
                    name="descripcion"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    rows="3"
                />

                <input
                    type="number"
                    name="precio"
                    placeholder="Precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                />


                <label htmlFor="unidad_kilo"></label>
                <select className="w-full border px-3 py-2 rounded" name="unidad_kilo" id=""
                    value={unidadKilo}
                    onChange={(e) => setUnidadKilo(e.target.value)}>
                    <option value="unidad">Unidad</option>
                    <option value="Kilo">Kilo</option>
                </select>

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                />

                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="activo"
                        checked={activo}
                        onChange={(e) => setActivo(e.target.checked)}

                    />
                    <span>Activo</span>
                </label>

                <p className='flex justify-end'>
                    <button onClick={onClose} type="submit" className="bg-gray-600 text-white px-4 py-2 mr-6 rounded hover:bg-gray-700">
                        Cancelar
                    </button>

                    <button onClick={() => {
                        guardarProductos()
                    }} type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Guardar Producto
                    </button>
                </p>

            </div>
        </div >
    )
}
