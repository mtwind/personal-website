'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Define the light theme configuration
let lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: grey[900], // Dark text/icons on light background
        },
        secondary: {
            main: grey[200], // A light grey for secondary elements
        },
        background: {
            default: grey[50],
            paper: grey[100],
        }
    },
    typography: {
        fontFamily: 'Josefin Sans, sans-serif'
    }
});

// Define the dark theme configuration
let darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: grey[50], // Light text/icons on dark background
        },
        secondary: {
            main: grey[900], // The original dark color
        },
        background: {
            default: grey[800],
            paper: '#1e1e1e', // A slightly lighter dark for surfaces
        }
    },
    typography: {
        fontFamily: 'Josefin Sans, sans-serif'
    }
});

// Apply responsive font sizes to both themes
lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };