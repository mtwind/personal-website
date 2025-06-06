'use client';

/*  https://mui.com/material-ui/customization/theming/  */

import { createTheme } from '@mui/material/styles';
import { grey, lime, purple } from '@mui/material/colors';


const theme = createTheme({
    typography: {
        fontFamily: 'Josefin Sans, sans-serif'
    },
    palette: {
        primary: {
            main: grey[50],
        },
        secondary: {
            main:grey[900],
        },
        
    }
});


const theme2 = createTheme({
    typography: {
        fontFamily: 'Josefin Sans, sans-serif'
    },
    palette: {
        primary: lime,
        secondary: purple,
    }
});

export default theme;