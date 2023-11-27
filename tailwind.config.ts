import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite'
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        green: '#50fa7b',
        purple: '#6666ff',
        choice: '#FF0099',
        black: '#0f101afc',
        white: '#f7f7f7f5',
        'slate': {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617',
        },
      },
      backgroundImage: {
        none: 'none',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr':
          'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br':
          'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl':
          'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl':
          'linear-gradient(to top left, var(--tw-gradient-stops))',
        'gradient-zospace-1':
          'linear-gradient(180deg, rgba(20, 20, 22, 0.9) 29.21%, rgba(0, 10, 255, 0.72) 75.43%)',
        'gradient-zospace-2':
          'linear-gradient(178.46deg, rgba(26, 104, 130, 0) 17.98%, #FF9A3D 38.85%, #FFBE38 40.3%, #4827A5 74.77%)'
      },
    },
  },
  plugins: [],
}
export default config
