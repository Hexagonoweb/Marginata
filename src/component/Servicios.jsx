import React from 'react';

export default function Servicios() {
	return (
		<>
			<div className='bg-[#DFE3C6]'>
				<div className='flex flex-col'>
					<h1 className='text-[#535449] text-center text-2xl font-bemirs font-bold m-4 lg:text-6xl lg:p-4'>
						NUESTROS SERVICIOS
					</h1>
					<ul className='list-inside list-disc text-center '>
						<li className='font-belleza text-xl underline lg:text-4xl text-[#535449] '>
							Venta de plantas
						</li>
						<li className='font-belleza text-xl underline lg:text-4xl text-[#535449] '>
							Mantenimiento de jardines
						</li>
						<li className='font-belleza text-xl underline lg:text-4xl text-[#535449] '>
							Paisajismo y diseño de exteriores
						</li>
						<li className='font-belleza text-xl underline lg:text-4xl text-[#535449] '>
							Consultoría y asesoramiento
						</li>
						<li className='font-belleza text-xl underline lg:text-4xl text-[#535449] '>
							Suministro de insumos para jardinería
						</li>
						<li className='font-belleza text-xl underline lg:text-4xl text-[#535449] '>
							Servicio de entrega a domicilio
						</li>
					</ul>
					<div className='flex items-center justify-center my-2 lg:my-4'>
						<button className='font-bemirs text-2xl mt-4 font-bold text-white border-2 rounded-lg py-2 px-4 bg-[#535449] hover:bg-[#8B8E73] ease-in duration-300 lg:w-[700px]'>
							Descarga el listado de nuestras plantas
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
