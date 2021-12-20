import React from 'react';
import { useFormik  } from 'formik';
import * as Yup from 'yup';

const DetalleProductos = () => {
 // Validación y leer los datos del formulario
 const formik = useFormik({
    initialValues: {
        id:'',
        reference:'',
        category:'',
        size:'',
        description:'',
        availability:'',
        price:'',
        quantity:'',
        photography:'',
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
        <h1 className="text-3xl font-light mb-4">Detalle del Producto</h1>

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
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Referencia:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="reference"
                        type="text"
                        placeholder='xxx 000'
                        value={formik.values.reference}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    </div>
                    { formik.touched.reference && formik.errors.reference ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className='font-bold'>Hubo un error:</p>
                            <p>{formik.errors.reference}</p>
                        </div>
                    ) : null }

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Categoría:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="category"
                        type="text"
                        placeholder='xxxxxx'
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    </div>
                    { formik.touched.category && formik.errors.category ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className='font-bold'>Hubo un error:</p>
                            <p>{formik.errors.category}</p>
                        </div>
                    ) : null }

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Talla:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="size"
                        type="text"
                        placeholder='X'
                    />
                    </div>

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Descripcion:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="description"
                        type="text"
                        placeholder='00'
                    />
                    </div>

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Disponible:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="availability"
                        type="text"
                        placeholder='si-no'
                    />
                    </div>

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Precio:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="price"
                        type="text"
                        placeholder='0.000'
                    />
                    </div>

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Cantidad:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="quantity"
                        type="text"
                        placeholder='00'
                    />
                    </div>

                    <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Fotografia:</label>
                    <input 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="photography"
                        type="text"
                        placeholder='www.xxxxxxx0000.jpg'
                    />
                    </div>

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

export default DetalleProductos;