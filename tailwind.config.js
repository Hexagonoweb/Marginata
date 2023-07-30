/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			source: ['Source Serif Pro', 'Georgia', 'serif'],
			poppinsBlack: ['Poppins-Black'],
			poppinsThin: ['Poppins-Thin'],
			abrilFatface: ['AbrilFatface-Regular'],
			Orbitron: ['Orbitron-Regular'],
			bemirs: ['bemirsdemoversionregular'],
			belleza: ['Belleza-Regular'],
		},
		extend: {
			backgroundImage: {
				imagenuno:
					'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url("./fondo1.png")',
			},
			backgroundColor: {
				fondo: '#2f2f2f',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
