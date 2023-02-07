import { styled } from '../../../../styles'

export const Artist = styled('div', {
    width: '21.875rem',
    height: '9.375rem',
    backgroundColor: '$card-color',
    display: 'flex',
    flexDirection: 'row',
    gap: '2.5rem',
    padding: '1.5625rem 1.875rem',

    fontWeight: '500',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',

    div:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '0.625rem',

        'span:last-child' : {
            color: '$color-logo',
        }
    },

    '&:hover': {
        backgroundColor: '#FF5B50',
        color: '$white',

        'span:last-child' : {
            color: '$white',
        },

        transition: 'all 0.8s',
        cursor: 'pointer',
    }
})