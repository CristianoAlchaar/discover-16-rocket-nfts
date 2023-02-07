import { styled } from '../../styles'

export const InfoContainer = styled('section', {
    display: 'flex',
    flexDirection: 'row',
    
    aside:{
        height: '41.625rem',
        width: '50%',
        maxWidth: '281px',
        borderRight: '1px solid #5A5757',
        borderBottom: '1px solid #5A5757',

        ul:{
            height: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8.125rem',

            li:{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

                'span:first-child':{
                    fontSize: '3.125rem',
                    lineHeight: '3,8125rem',
                    color: 'white',
                },

                span:{
                    fontWeight: '600',
                    fontSize: '1.25rem',
                    fontHeight: '1.5rem',
                    color: '$subtitle-color'
                }
            }
        },
    },

    'div:last-child':{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})

export const TextContainer = styled('div', {
    margin: 'auto 70px',
    display: 'flex',
    gap: '2rem',

    span: {
        fontSize: '1.125rem',
        lineHeight: '1.375rem',
        color: '$white',
        textAlign: 'justify',
        display: 'flex',
        flexDirection: 'column',
        gap:'2.5rem',

        'span:last-child':{
            textDecoration: 'underline',
        },
    },

    '@media screen and (max-width: 800px)':{  
        flexDirection: 'column',                   
    },

    '@media screen and (max-width: 550px)': {
        margin: 'auto 10px',  
        gap: '1rem',

        span: {
            gap: '1rem',
        }
    }
})

export const Detach = styled('span',{
    textDecoration: 'underline',
    color: '$color-logo !important',
    display: 'inline !important',
})