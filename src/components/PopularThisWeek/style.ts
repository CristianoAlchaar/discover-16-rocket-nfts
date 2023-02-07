import { styled } from '../../styles'

export const PopularContainer = styled('section', {
    width: '88%',
    margin: '9.375rem auto',

    h2: {
        fontWeight: '700',
        fontSize:'3.125rem',
        lineHeight: '3.75rem',
    },
})

export const AsthronautsContainer = styled('div',{
    marginTop: '9.875rem',
    display: 'flex',
    flexDirection: 'row',

    div: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',

        'span:first-child': {
            marginTop: '5.125rem',
        }
    },

    'div:first-child': {
        borderRight: '1px solid $subtitle-color',
    },

    'div:last-child': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },

    '@media screen and (max-width: 860px)':{
        marginTop: '3rem',
        flexDirection: 'column',

        div: {
            width: '100%',
            alignItems: 'center',

            'span:first-child': {
                marginTop: '2rem',
            }
        },

        'div:first-child':{
            border: 'none',
        },

        'div:last-child':{
            alignItems: 'center',
        },
    }
})

export const Detach = styled('span',{
    color: '$color-logo',
})