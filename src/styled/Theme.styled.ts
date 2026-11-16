const base = {

  fonts: {
    heading: '"Bungee", sans-serif',
    body: '"Inter", sans-serif'
  },

  fontSizes: {
    xs: '0.625rem',
    s: '0.8125rem',
    m: '0.875rem',
    l: '1.3125rem',
    xl: '1.5rem',
    xxl: '1.625rem',
    title: '10.375rem'
  },

  radius: {
    s: '8px',
    m: '12px'
  }

}

export const darkTheme = {
  ...base,

  colors: {
    primary: '#ffcc22',
    primaryDark: '#b88e00',
    text: '#ffcc22',
    buttonText: '#0b0b0b',
    background: '#0b0b0b',
    surface: '#101010',
    highlight: '#2b2510',
    border: '#80680e',
    gridSmall: 'rgba(255, 204, 34, 0.13)',
    gridLarge: 'rgba(255, 204, 34, 0.2)'
  }
}

export const lightTheme = {
  ...base,

  colors: {
    primary: '#ffcc22',
    primaryDark: '#b88e00',
    text: '#0b0b0b',
    buttonText: '#0b0b0b',
    background: '#fafafa',
    surface: '#ffffff',
    highlight: '#fff3c4',
    border: '#b88e00',
    gridSmall: 'rgba(11, 11, 11, 0.06)',
    gridLarge: 'rgba(11, 11, 11, 0.1)'
  }
}

export type Theme = typeof darkTheme