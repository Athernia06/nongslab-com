import { px } from 'framer-motion';

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
            fontSize: {
                'h1': '52px',
                'h2': '40px',
                'h3': '32px',
                'h4': '24px',
                'h5': '20px',
                'light': '18px',
                'body': '16px',
                'caption': '14px',
                'small': '12px',
            },
        },
    },
    plugins: [],
}
