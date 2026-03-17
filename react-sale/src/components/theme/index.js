import { createTheme } from '@mui/material/styles';

// CSS переменные из оригинального файла
const colors = {
  blue900: '#0B63A8',
  blueHover: '#064a81',
  cyan400: '#5bc5f2',
  lightBlue: '#e6f4ff',
  blue: '#e7f3ff',
  baseColor1: '#0537c8',
  baseColor2: '#5bc5f2',
  text: '#1E1E1E',
  muted: '#6D7A88',
  bg: '#ffffff',
  surface: '#ffffff',
  surfaceSoft: '#EAF5FF',
  border: '#CFE3F5',
  border2: '#BFD6EA',
  danger: '#D32F2F',
  dangerSoft: '#F6C8D1',
  success: '#079b3f',
  successSoft: '#DDF4C6',
  progressSoft: '#BFDDF8',
  waitSoft: '#EAEAEA',
  warning: '#ffb800',
  dark: '#242d27',
  grey: '#6c7a93',
  lightGrey: '#C9D7E7',
  darkBlue: '#7DB3E3',
  grayLight: '#ffffff',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue900,
      light: colors.lightBlue,
      dark: colors.blueHover,
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.cyan400,
      light: colors.lightBlue,
      dark: colors.darkBlue,
    },
    error: {
      main: colors.danger,
      light: colors.dangerSoft,
    },
    success: {
      main: colors.success,
      light: colors.successSoft,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.blue900,
      light: colors.lightBlue,
    },
    text: {
      primary: colors.text,
      secondary: colors.muted,
    },
    background: {
      default: colors.grayLight,
      paper: colors.surface,
    },
    divider: colors.border,
    action: {
      hover: colors.lightBlue,
    },
  },
  typography: {
    fontFamily: '"TT Fors", "Inter", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '54px',
      fontWeight: 400,
      lineHeight: 1.2,
      '@media (max-width:990px)': {
        fontSize: '24px',
      },
    },
    h2: {
      fontSize: '24px',
      fontWeight: 400,
      '@media (max-width:768px)': {
        fontSize: '20px',
      },
    },
    h3: {
      fontSize: '20px',
      fontWeight: 500,
    },
    h4: {
      fontSize: '18px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '12px',
    },
    caption: {
      fontSize: '12px',
      color: colors.muted,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0px 0px 8px rgba(0, 0, 0, 0.2)',
    // ... остальные тени
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'TT Fors';
          src: local('TT Fors'), url('/fonts/TT Fors Trial Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'TT Fors ExtraBold';
          src: local('TT Fors ExtraBold'), url('/fonts/TT Fors Trial ExtraBold.woff') format('woff');
          font-weight: 800;
          font-style: normal;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          height: 100%;
          background-color: ${colors.grayLight};
          font-family: 'TT Fors', 'Inter', 'Roboto', Arial, sans-serif;
          color: ${colors.text};
          font-size: 14px;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          },
        },
        containedPrimary: {
          backgroundColor: colors.blue900,
          color: '#fff',
          '&:hover': {
            backgroundColor: colors.blueHover,
          },
        },
        outlined: {
          borderColor: colors.grey,
          color: colors.grey,
          '&:hover': {
            backgroundColor: colors.lightBlue,
            borderColor: colors.blue900,
            color: colors.blue900,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 10px',
          fontSize: '12px',
          borderRight: `1px solid ${colors.lightGrey}`,
          '&:last-child': {
            borderRight: 'none',
          },
        },
        head: {
          fontWeight: 500,
          color: colors.dark,
          backgroundColor: '#fff',
          borderBottom: `1px solid ${colors.lightGrey}`,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '&:nth-of-type(odd)': {
            backgroundColor: '#EEF6FF',
          },
          '&:hover': {
            backgroundColor: '#e6f2ff !important',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 20,
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: colors.progressSoft,
          color: colors.text,
        },
        colorSecondary: {
          backgroundColor: colors.successSoft,
          color: colors.text,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          height: 16,
          minWidth: 16,
          padding: '0 4px',
          borderRadius: 999,
          fontSize: 12,
          lineHeight: 1,
          color: '#fff',
          backgroundColor: '#E53935',
        },
      },
    },
  },
});

export default theme;