/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--nation-red)',
        canvas: 'var(--nation-white)',
        ember: 'var(--nation-orange-deep)',
        gold: 'var(--nation-amber)',
        mist: '#fdf2ef',
        nationred: 'var(--nation-red)',
        nationcrimson: 'var(--nation-crimson)',
        nationorangedeep: 'var(--nation-orange-deep)',
        nationorange: 'var(--nation-orange)',
        nationamber: 'var(--nation-amber)',
        nationwhite: 'var(--nation-white)',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(192, 57, 43, 0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(245, 166, 35, 0.28), transparent 28%), radial-gradient(circle at top right, rgba(244, 116, 33, 0.26), transparent 26%), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(253,242,239,1) 100%)',
      },
    },
  },
  plugins: [],
}
