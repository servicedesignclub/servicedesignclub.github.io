module.exports = {
  purge: [],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        'sdc-blue':'#005FF1',
        'sdc-green':'#00D36C',
        'sdc-orange':'#FF8A00',
        'sdc-discord':'#5701E3',
        'sdc-gray':'#828282',
        'sdc-gray-light':'#949494',
      },
      fontFamily: {
        sans: [
          'Raleway',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },

    },
  },
  variants: {},
  plugins: [],
}
