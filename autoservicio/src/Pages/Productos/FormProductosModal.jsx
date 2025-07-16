import React, { useState } from 'react'

export const FormProductosModal = ({ open, onClose }) => {

    if (!open) return null
    return (
        <div className='z-30 bg-black/75 w-full h-full fixed top-0 left-0 flex items-center justify-center'>
            <div className='z-40 bg-white p-6 rounded-lg shadow-lg w-96 space-y-4'>


                <h2 className="text-xl font-bold text-gray-700">Agregar Producto</h2>

                <input type="text" name="nombre" placeholder="Nombre"

                    className="w-full border px-3 py-2 rounded"
                    required
                />

                <textarea
                    name="descripcion"
                    placeholder="Descripción"

                    className="w-full border px-3 py-2 rounded"
                    rows="3"
                />

                <input
                    type="number"
                    name="precio"
                    placeholder="Precio"

                    className="w-full border px-3 py-2 rounded"
                    required
                />


                <label htmlFor="unidad_kilo"></label>
                <select className="w-full border px-3 py-2 rounded" name="unidad_kilo" id="">
                    <option value="unidad">Unidad</option>
                    <option value="Kilo">Kilo</option>
                </select>

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"

                    className="w-full border px-3 py-2 rounded"
                />

                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="activo"

                    />
                    <span>Activo</span>
                </label>

                <p className='flex justify-end'>
                    <button onClick={onClose} type="submit" className="bg-gray-600 text-white px-4 py-2 mr-6 rounded hover:bg-gray-700">
                        Cancelar
                    </button>

                    <button onClick={onClose} type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Guardar Producto
                    </button>
                </p>

            </div>
        </div>
    )
}
