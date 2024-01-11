/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            black: 'var(--black)',
            white: 'var(--white)',
            primary: 'var(--primary)',
        },
        borderWidth: {
            10: '10px',
        },
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            serif: ['PT Sans', 'serif'],
        },
        extend: {},
    },
    plugins: [],
}
