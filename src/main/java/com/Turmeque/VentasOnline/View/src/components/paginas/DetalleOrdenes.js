import React from 'react';
import { useFormik  } from 'formik';
import * as Yup from 'yup';

const DetalleOrdenes = () => {
    // Validación y leer los datos del formulario
 const formik = useFormik({
    initialValues: {
        id:'',
        registerDay:'',
        status:'',
    },
    validationSchema: Yup.object({
        id: Yup.number()
            .min(1, 'Debes escribir un número')
            .required('El id es obligatorio'),
        reference: Yup.number()
            .min(1, 'Debes escribir una referencia')
            .required('La referencia es obligatoria'),
        category: Yup.string()
            .min(3, 'La categoria no debe tener menos 3 caracteres')
            .required('La categoria es obligatoria'),
    }),
    onSubmit: datos => {
        console.log(datos);
    }
});


return(
    <>
        <h1 className="text-3xl font-light mb-4">Detalle de la Orden</h1>

        <div className="flex justify-center mt-10">
            <div className='w-full max-w-3xl'>
                <form onSubmit={formik.handleSubmitcd}>
                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">ID:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="id"
                        type="number"
                        placeholder='000'
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    </div>
                    { formik.touched.id && formik.errors.id ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className='font-bold'>Hubo un error:</p>
                            <p>{formik.errors.id}</p>
                        </div>
                    ) : null }

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Fecha de Registro:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="registerDay"
                        type="date"
                        placeholder='xx/xx/xxxx'
                        value={formik.values.registerDay}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    </div>
                    { formik.touched.registerDay && formik.errors.registerDay ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className='font-bold'>Hubo un error:</p>
                            <p>{formik.errors.registerDay}</p>
                        </div>
                    ) : null }

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Estado:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="status"
                        type="text"
                        placeholder='xxxxxx'
                        value={formik.values.status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    </div>
                    { formik.touched.status && formik.errors.status ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className='font-bold'>Hubo un error:</p>
                            <p>{formik.errors.status}</p>
                        </div>
                    ) : null }

                    <input 
                        type="submit"
                        className='bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold'
                        value="Agregar Usuario"
                    />
                </form>
            </div>
        </div>
    </>
);
}
export default DetalleOrdenes;