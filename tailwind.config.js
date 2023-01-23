/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    screens: {
			'sm': '640px',
			'md': '1100px',
			'lg': '1224px',
			'xl': '1380px',
			'2xl': '1536px',
		},
    extend: {
      colors:{
        'clr-navy':'#16182A',
        'clr-red':'#F95C75',
      },
      fontFamily: {
        'acumin':['acumin-pro','sans-serif'],
        'lato':['Lato','sans-serif'],
        'teko':['Teko', 'sans-serif'],
        'roboto':['Roboto', 'sans-serif']
			},
      backgroundImage:{
        'riche':'url(./img/richie.png)',
        'terra1':'url(./img/terra.jpg)',
        'bitter1':'url(./img/bitter.jpg)',
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus', 'group-hover'],
      scale:['responsive','hover','group-hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
}