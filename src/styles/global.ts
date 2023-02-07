import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },

      body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$body-background',
        color: '$text-color',
        minWidth: '380px',
      },

      'body, input, textarea, button': {
        fontFamily: 'Montserrat' ,
        fontWeight: 400
      },

      'a': {
        color: 'inherit',
        textDecoration: 'none'
      },

      'ul' : {
        listStyleType: 'none'
      }
})