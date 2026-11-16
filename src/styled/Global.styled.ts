import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    background-image:
      linear-gradient(${({ theme }) => theme.colors.gridLarge} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.gridLarge} 1px, transparent 1px),
      linear-gradient(${({ theme }) => theme.colors.gridSmall} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.gridSmall} 1px, transparent 1px);
    background-size: 120px 120px, 120px 120px, 24px 24px, 24px 24px;
  }
`
