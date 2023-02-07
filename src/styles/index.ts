import { createStitches } from "@stitches/react";

export const { 
    config, 
    styled, 
    globalCss,
    keyframes, 
    getCssText, 
    theme,
    createTheme,
} = createStitches({
    theme: {
        media : {
            bp3 : '(min-width: 950px)'
        },
       colors: {
        white : '#fff',
        'body-background' : '#0e0e0e',
        'color-logo' : '#ff5b50',
        'card-color' : '#252525',
        'text-color' : '#fff',
        'subtitle-color' : '#5a5757',
        'black-text' : '#000',
        'color-input' : '#0D0D0D'
       } 
    }
})


 
  
 
  
