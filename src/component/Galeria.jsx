import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Galeria() {
	const slides = [
		{
			id: '0',
			imagen: '/0.png',
			alt: 'Interior del vivero',
		},
		{
			id: '1',
			imagen: '/1.png',
			alt: 'Interior del vivero',
		},
		{
			id: '2',
			imagen: '/2.png',
			alt: 'Interior del vivero',
		},
		{
			id: '3',
			imagen: '/3.png',
			alt: 'Flores de muchos colores',
		},

		{
			id: '5',
			imagen: '/5.png',
			alt: 'Interior del vivero',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<>
			<div className='bg-[#535449]'>
				<div className='bg-[#535449 h-[700px] w-full sm:w-[600px] sm:h-[450px] lg:w-[800px] lg:h-[750px] m-auto py-16 px-4 relative'>
					<div
						style={{ backgroundImage: `url(${slides[currentIndex].imagen})` }}
						className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-2xl'
					></div>
					<div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-[#535449]/90 border-2 rounded-full border-[#DFE3C6] cursor-pointer'>
						<BsChevronCompactLeft
							className='fill-[#DFE3C6] '
							onClick={prevSlide}
							size={30}
						/>
					</div>
					<div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#535449]/90 border-2 border-[#DFE3C6] cursor-pointer'>
						<BsChevronCompactRight
							className='fill-[#DFE3C6]'
							onClick={nextSlide}
							size={30}
						/>
					</div>
					<div className='flex top-4 justify-center py-2'>
						{slides.map((slide, slideIndex) => (
							<div
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
								className='text-2xl cursor-pointer'
							>
								<RxDotFilled />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}


