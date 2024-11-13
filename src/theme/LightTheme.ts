import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const BLUE_THEME: ThemeTypes = {
    name: 'BLUE_THEME',
    dark: false,
    variables: {
        'border-color': '#e5eaef'
    },
    colors: { 
        primary: '#0085db',
        primary2: '#ffffff',
        secondary: '#707a82',
        info: '#46caeb', 
        success: '#4bd08b',
        warning: '#f8c076',
        error: '#EF5F71',
        indigo:'#8763da',
        lightwhite: '#ffffff',
        lightprimary: '#e5f3fb',
        lightinfo:'#e1f5fa',
        lightsecondary: '#e7ecf0',
        lightsuccess: '#dffff3',
        lighterror: '#ffede9',
        lightwarning: '#fff6ea',
        lightindigo:'#f1ebff',
        textPrimary: '#2A3547',
        textSecondary: '#2A3547',
        borderColor: '#e5eaef',
        inputBorder: '#DFE5EF',
        containerBg: '#ffffff',
        background: '#f3f4f7',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        grey100: '#707a82',
        grey200: '#111c2d',
        darkbg:'#2a3447',
        bglight:'#f5f8fb',
        bgdark:'#111c2d'
       
    }
};


export { BLUE_THEME};
