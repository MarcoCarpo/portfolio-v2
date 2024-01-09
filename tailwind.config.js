/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            black: 'var(--black)',
            white: 'var(--white)',
            primary: 'var(--primary)',
        },
        container: {
            padding: '2rem',
        },
        fontFamily: {
            sans: ['PT Sans', 'sans-serif'],
            serif: ['Nunito', 'serif'],
        },
        extend: {},
    },
    plugins: [],
}
