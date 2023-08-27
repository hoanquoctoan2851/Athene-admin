// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-color': '#2B937A',
        'secondary-color': '#2B937A',
        'emphasis-color': '#94FFDF',
        'emphasis-color-1': '#00FFD4',
        'neutral-0': '#FFF',
        'neutral-200': '#CDD6D4',
        'neutral-300': '#B9C5C2',
        'neutral-400': '#9AA7A4',
        'neutral-600': '#363636',
        'gray-1': '#EDF2F7',
        'gray-2': '#131D20',
        'gray-3': 'rgba(255, 255, 255, 0.02)',
        'gray-4': '#262F31',
        'gray-5': 'rgba(255, 255, 255, 0.10)',
        'green-color': '#A2FFBC',
        'yellow-color': '#FFCB11',
        'purple-color': '#F8A2FF',
        'violet-color': '#8684FF',
        'blur-color': '#53ACFF',
        'red-color': '#FF6666',
        'red-color-2': '#F17E7E',
        'pink-color': '#FFA2A2',
        'orange': '#FF7324',
        'bg-global': '#0A1013',
      }
    },
    screens: {
      fold: { max: '300px' },
      mobile: { max: '767px' },
      'not-mobile': { min: '768px' },
      'not-desktop': { max: '1024px' },
      tablet: { min: '768px', max: '1024px' },
      laptop: { max: '1280px' },
      desktop: { min: '1280px' },
      'desktop-1': { min: '1366px' },
      'desktop-2': { min: '1440px' },
      'desktop-3': { min: '1520px' },
      'screen-hide-sidebar': { max: '924px' }
    }
  },
}
