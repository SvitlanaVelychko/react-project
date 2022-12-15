import { createTheme } from '@mui/material';

export const theme = createTheme({
    colors: {
        black: '#000',
        white: '#fff',
        blue: '#090eb0',
        text: '#006400',
        bgcolor: '#c8ffa8',
        accent: '#ef0119',
        bgcButton: '#32CD32',
        bgcStat: '#FFFFE0',
        delBtn: '#edb9b9',
    },
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        body: 'system-ui, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: {
        xs: '12px',
        s: '14px',
        m: '16px',
        l: '24px',
        xl: '32px',
    },
    fontWeights: {
        normal: 400,
        bold: 700,
    },
    borders: {
        none: 'none',
        normal: '1px solid',
    },
    radii: {
        none: '0',
        normal: '4px',
        round: '50%',
    },
    transition: {
    color: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    all: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
});