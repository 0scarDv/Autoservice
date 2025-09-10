import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

export const EditProductos = ({ open, onClose, refrescarLista, productoId }) => {
    if (!open) return null;
    const [productoEdit, setProductoEdit] = useState(null);



    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const productoObtenido = await axios.get(`http://localhost:3000/productos/${productoId}`);
                setProductoEdit(productoObtenido.data);
                console.log(productoObtenido.data);
            }
            catch (error) {
                console.log("Error al obtener producto", error);
            }
        }
        obtenerProducto();
    }, [productoId]);




    if (!productoEdit) {// esto se cargara en caso de que el producto no este listo
        return (
            <div className='z-30 bg-black/75 w-full h-full fixed top-0 left-0 flex items-center justify-center'>
                <div className="bg-white p-6 rounded-lg">Cargando producto...</div>
            </div>
        );
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductoEdit({
            ...productoEdit,
            [name]: type === "checkbox" ? checked : value
        });
    };
    const handleGuardar = async () => {
        try {
            await axios.put(`http://localhost:3000/productos/${productoId}`, productoEdit);
            refrescarLista();
            onClose();

        } catch (error) {

        }


    }
    return (
        <div className='z-30 bg-black/75 w-full h-full fixed top-0 left-0 flex items-center justify-center'>
            <div className='z-40 bg-white p-6 rounded-lg shadow-lg w-96 space-y-4'>
                <h2 className="text-xl font-bold text-gray-700">Editar Producto</h2>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="w-full border px-3 py-2 rounded"
                    required
                    value={productoEdit.nombre}
                    onChange={handleChange}
                />
                <label htmlFor="descripcion">Descripción del producto</label>
                <textarea
                    name="descripcion"
                    placeholder="Descripción"
                    value={productoEdit.descripcion}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    rows="3"
                />
                <label htmlFor="nombre">Precio</label>
                <input
                    type="number"
                    name="precioPorIKilo"
                    placeholder="Precio"
                    value={productoEdit.precioPorKilo}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />

                <label htmlFor="unidad_kilo">Unidad - Kilo</label>
                <select
                    className="w-full border px-3 py-2 rounded"
                    name="unidad_kilo"
                    value={productoEdit.unidadKilo}
                    onChange={handleChange}
                >
                    <option value="unidad">Unidad</option>
                    <option value="Kilo">Kilo</option>
                </select>
                <label htmlFor="unidad_kilo">Cantidad disponible</label>
                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={productoEdit.stock}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                />

                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="activo"
                        checked={productoEdit.activo}
                        onChange={handleChange}
                    />
                    <span>Activo</span>
                </label>

                <p className='flex justify-end'>
                    <button onClick={onClose} type="button" className="bg-gray-600 text-white px-4 py-2 mr-6 rounded hover:bg-gray-700">
                        Cancelar
                    </button>

                    <button
                        onClick={() => {
                            handleGuardar();
                            onClose();
                        }}
                        type="button"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Guardar Producto
                    </button>
                </p>
            </div>
        </div >
    );
};
