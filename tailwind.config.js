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
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
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
