/** @type {import('tailwindcss').Config} */
const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsl(var(${variable}) / ${opacityValue})`;
    }
    return `hsl(var(${variable}))`;
  };
};

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: withOpacityValue('--border'),
        background: withOpacityValue('--background'),
        foreground: withOpacityValue('--foreground'),
        card: withOpacityValue('--card'),
        'card-foreground': withOpacityValue('--card-foreground'),
        popover: withOpacityValue('--popover'),
        'popover-foreground': withOpacityValue('--popover-foreground'),
        primary: withOpacityValue('--primary'),
        'primary-foreground': withOpacityValue('--primary-foreground'),
        secondary: withOpacityValue('--secondary'),
        'secondary-foreground': withOpacityValue('--secondary-foreground'),
        muted: withOpacityValue('--muted'),
        'muted-foreground': withOpacityValue('--muted-foreground'),
        accent: withOpacityValue('--accent'),
        'accent-foreground': withOpacityValue('--accent-foreground'),
        destructive: withOpacityValue('--destructive'),
        'destructive-foreground': withOpacityValue('--destructive-foreground'),
        input: withOpacityValue('--input'),
        ring: withOpacityValue('--ring'),
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        marquee: 'marquee 20s linear infinite',
        'gradient-x': 'gradient-x 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}; 