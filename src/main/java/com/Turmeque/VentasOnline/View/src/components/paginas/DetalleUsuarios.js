import React from 'react';
import { useFormik  } from 'formik';
import * as Yup from 'yup';


const DetalleUsuarios = () => {

    // Validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            id:'',
            identification:'',
            name:'',
            birthDay:'',
            monthBirthDay:'',
            address:'',
            cellPhone:'',
            email:'',
            password:'',
            zone:'',
            type:'',
        },
        validationSchema: Yup.object({
            id: Yup.number()
                .min(1, 'Debes escribir un número')
                .required('El id es obligatorio'),
            identification: Yup.number()
                .min(1, 'Debes escribir un número de identificación')
                .required('La identificación es obligatoria'),
            name: Yup.string()
                .min(3, 'El nombre debe tener al menos 3 caracteres')
                .required('El nombre es obligatorio'),
            email: Yup.string()
                .min(3, 'La dirección debe tener al menos 3 caracteres')
                .required('El email es obligatorio'),
        }),
        onSubmit: datos => {
            console.log(datos);
        }
    });


    return(
        <>
            <h1 className="text-3xl font-light mb-4">Detalle Usuarios</h1>

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
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Identificación:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="identification"
                            type="number"
                            placeholder='00000000'
                            value={formik.values.identification}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        </div>
                        { formik.touched.identification && formik.errors.identification ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.identification}</p>
                            </div>
                        ) : null }

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Nombre:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="name"
                            type="text"
                            placeholder='xxxxxxx xxxxxxx xxxxxx'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        </div>
                        { formik.touched.name && formik.errors.name ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.name}</p>
                            </div>
                        ) : null }

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Fecha Nacimiento:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="birthDay"
                            type="date"
                            placeholder='xxxx-xx-xx'
                        />
                        </div>

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Mes Cumpleaños:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="monthBirthDay"
                            type="number"
                            placeholder='00'
                        />
                        </div>

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Dirección:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="address"
                            type="text"
                            placeholder='xxxxx 000 xx 0000 0000'
                        />
                        </div>

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Teléfono:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="cellPhone"
                            type="number"
                            placeholder='000 000 0000'
                        />
                        </div>

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Email:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="email"
                            type="email"
                            placeholder='xxxxx@xxxx.com'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        </div>
                        { formik.touched.email && formik.errors.email ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.email}</p>
                            </div>
                        ) : null }

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Contraseña:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="password"
                            type="password"
                            placeholder='******'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        </div>
                        { formik.touched.password && formik.errors.password ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.password}</p>
                            </div>
                        ) : null }

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Zona:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="zone"
                            type="text"
                            placeholder='xxxxxxx 00'
                        />
                        </div>

                        <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-1' htmlFor="nombre">Tipo:</label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="type"
                            type="text"
                            placeholder='xxxxx'
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

export default DetalleUsuarios;