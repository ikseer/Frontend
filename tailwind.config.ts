import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    function ({ addVariant }) {
      addVariant('rtl', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = rule.selector.replace(/\./g, '&.rtl .');
        });
      });
    },
  ],
  darkMode: 'class',
};

export default config;
