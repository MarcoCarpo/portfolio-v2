/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            black: 'rgb(var(--black) / 1)',
            white: 'rgb(var(--white) / 1)',
            primary: 'rgb(var(--primary) / 1)',
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
