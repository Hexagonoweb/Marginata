import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export default function Footer() {
	return (
		<>
			<div className='bg-[#535449] lg:w-full h-[300px] flex flex-col justify-center items-center text-center '>
				<div className=' text-[#DFE3C6] font-belleza text-2xl sm:text-4xl lg:text-4xl '>
					Los coihues 1200 <br />
					WhatsApp: +54 9 294445-9806. <br />
					Lago Puelo Patagonia. Argentina. <br />
					consultas@viveromarginata.com
				</div>
				<div className='flex gap-8 p-6 '>
					<BsFacebook className='fill-[#DFE3C6]' size={50} />
					<BsInstagram className='fill-[#DFE3C6]' size={50} />
				</div>
			</div>
		</>
	);
}

