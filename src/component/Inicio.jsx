import React from 'react';

export default function Inicio() {
	return (
		<>
			<section className='relative h-screen bg-imagenuno bg-cover bg-center flex justify-center items-center'>
				<img
					src='/logo2.png'
					className='absolute top-0 left-0 m-4 w-[120px] sm:w-[110px] lg:w-[200px] h-auto'
				></img>
				<section className='flex justify-center items-center'>
					<div
						className='h-[450px] w-[300px] sm:h-[280px] sm:w-[500px] sm:mt-14 lg:h-[400px] lg:w-[600px] border-2 bg-[#F3F7D8]/50 p-10 flex flex-col items-center justify-center rounded-tl-[35px] rounded-tr-[150px] rounded-bl-[150px]'
						id='tarjeta'
					>
						<h1 className='font-bemirs text-2xl font-bold text-[#424336] text-center lg:text-6xl'>
							QUIENES SOMOS
						</h1>
						<p className='font-belleza text-lg text-center sm:py-2 font-bold text-[#424336] lg:text-2xl'>
							Somos un vivero dedicado a ofrecer una amplia variedad de plantas
							y servicios de jardinería desde el año 2000. Nos enorgullece ser
							una referencia en el cuidado de plantas y embellecimiento de
							espacios verdes en Lago Puelo y sus alrededores.
						</p>
						<button className='font-bemirs text-2xl mt-4 font-bold text-white border-2 rounded-lg py-2 px-4 bg-[#535449] hover:bg-[#DFE3C6] ease-in duration-300 hover:text-[#424336]'>
							SABER MAS
						</button>
					</div>
				</section>
			</section>
		</>
	);
}





