import React from 'react';

export default function Formulario() {
	return (
		<>
			<div className='flex justify-center items-center bg-[#535449] '>
				<form action='' method='post' className='py-10'>
					<div className='flex flex-col lg:w-[500px] bg-[#DFE3C6] p-4 lg:p-5 border-4 border-white rounded-xl '>
						<label
							className='font-bemirs font-bold text-[#535449] text-xl m-2'
							htmlFor='nombre'
						>
							Nombre
						</label>
						<input
							type='text'
							id='nombre'
							required
							className='rounded-lg shadow-md focus:border-lime-600 focus:ring-lime-600'
						/>
						<label
							className='font-bemirs font-bold text-[#535449] text-xl m-2'
							htmlFor='Email'
						>
							Email
						</label>
						<input
							type='email'
							id='Email'
							required
							className='rounded-lg shadow-md focus:border-lime-600 focus:ring-lime-600'
						/>

						<label
							className='font-bemirs font-bold text-[#535449] text-xl m-2'
							htmlFor='asunto'
						>
							Asunto
						</label>
						<input
							type='text'
							id='asunto'
							required
							className='rounded-lg shadow-md focus:border-lime-600 focus:ring-lime-600'
						/>
						<label
							className='font-bemirs font-bold text-[#535449] text-xl m-2 '
							htmlFor='mensaje'
						>
							Mensaje
						</label>
						<textarea
							name='mensaje'
							id='mensaje'
							cols='40'
							rows='10'
							className='rounded-lg shadow-md focus:border-lime-600 focus:ring-lime-600'
						></textarea>
						<button className='font-bemirs text-xl mt-4 font-bold text-white border-2 border-white rounded-lg py-2  bg-[#535449] hover:bg-[#8B8E73] ease-in 
						duration-300 shadow-md'>
							ENVIAR
						</button>
					</div>
				</form>
			</div>
		</>
	);
}


