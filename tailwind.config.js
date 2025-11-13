/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F08733',
                secondary: '#1E40AF',
                accent: '#F59E0B',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/src/assets/background.png')",
            },
        },
    },
    plugins: [],
}
