import type { Config } from 'tailwindcss';
import { colors } from '@/utils/theme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
} satisfies Config;
