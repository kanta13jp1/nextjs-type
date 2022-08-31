const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit', //JITモードを有効化
  // パージの対象ファイルを設定
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // スプレッドで展開している前に、メインとしたいフォント名を追加する
      // フォント名にスペースがある場合は、'Noto\\ Sans\\ JP'のように \ (バックスラッシュ)でエスケープする
      // Serif 体がメインの場合は、 `...defaultTheme.fontFamily.serif` を展開する
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
      sans: [...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-25deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(-25deg)' },
          '80%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        wave: 'wave 560ms ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        // 開発で使用するカラーを設定する
        // `DEFAULT` で設定しているものは、`text-theme` や `bg-primary` のように使用できる
        // それ以外は、 `text-theme-light` や `bg-primary-dark` のように使用する
        // テキストなどに使うベースカラー
        theme: {
          light: '#ffffff',
          medium: '#cccccc',
          DEFAULT: '#242424',
          dark: '#111111',
        },
        // メインカラー
        primary: {
          // light: '',
          // medium: '',
          DEFAULT: '#242424',
          // dark: '',
        },
        // サブカラー
        // secondary: {
        //   light: '',
        //   medium: '',
        //   DEFAULT: '',
        //   dark: '',
        // },
        // アクセントカラー
        // accent: {
        //   light: '',
        //   medium: '',
        //   DEFAULT: '',
        //   dark: '',
        // },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '1px 1px 1px #3c5c5e',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
