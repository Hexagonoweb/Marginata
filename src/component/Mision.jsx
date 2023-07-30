import React from 'react';

export default function Mision() {
	return (
		<>
			<div
				className='h-auto w-full sm:h-auto sm:w-full lg:h-auto lg:w-full bg-[#535449]'
				id='mision'
			>
				<section className='flex flex-col items-center justify-center p-10'>
					<div className='border-4 rounded-xl border-[#DFE3C6] '>
						<h1 className='text-white text-center text-2xl font-bemirs m-4 lg:text-6xl lg:p-4'>
							NUESTRA MISIÓN
						</h1>
						<p className='text-white font-belleza text-center p-4 text-lg lg:text-4xl lg:m-4 '>
							Queremos brindar a nuestros clientes una experiencia excepcional
							al proporcionar productos de alta calidad y asesoramiento experto
							para ayudarles a crear y mantener hermosos jardines y espacios
							naturales. Desde nuestros humildes comienzos, hemos cultivado una
							reputación sólida basada en nuestra pasión por las plantas, el
							compromiso con la calidad y la atención personalizada que
							ofrecemos a cada cliente.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
