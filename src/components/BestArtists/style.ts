import { styled } from '../../styles'

export const BestArtistsContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    margin: '9.25rem auto',

    h2 : { 
        fontWeight: '700',
        fontSize: '3.125rem',
        lineHeight: '3.8125rem',
        textAlign: 'center',

        span : {
            color: '$color-logo'
        }
    },

    footer : {
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',

        span : {
            marginRight: '1rem'
        },

        'span:hover':{
            fontWeight: 'bold'
        }
    }
})

export const ArtistCardContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gap: '9.375rem',
    margin: '7.5rem auto 4.375rem auto',

    '@media screen and (max-width: 1650px)': {
        gap: '6rem',
    },

    '@media screen and (max-width: 1480px)': {
        gap: '3rem',
    },

    '@media screen and (max-width: 1350px)': {
        gap: '1.5rem',
    },

    '@media screen and (max-width: 1280px)': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }
})