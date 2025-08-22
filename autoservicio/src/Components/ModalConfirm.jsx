import React from "react";

export const ModalConfirm = ({ open, onClose, title, onClick }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center">
                {/* Título */}
                <h1 className="text-xl font-semibold text-gray-800 mb-2">{title}</h1>
                <h3 className="text-sm text-gray-600 mb-6">
                    Esta acción no se puede deshacer
                </h3>

                {/* Botones */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => {
                            onClick(); onClose();

                        }}
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};
