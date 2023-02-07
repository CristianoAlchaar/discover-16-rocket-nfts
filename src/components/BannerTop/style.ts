import { styled } from '../../styles'

export const BannerTopContainer = styled('div', {
    width: '88%',
    margin: '5.625rem auto 6.25rem auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '2rem',

    h2:{
        fontWeight: '700',
        fontSize: '3.125rem',
        lineHeight: '3.8125rem',
    },

    p:{
        fontSize: '1.125rem',
        lineHeight: '1.375rem',
    },

    '@media screen and (max-width: 1050px)' : {
        flexDirection: "column",   
        gap : '4rem',

        h2:{
            display: "block",
            order: '-1',
            textAlign: "center"
        },
    }
})

export const LeftContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '3.4375rem'
})

export const SelectedArtistContainer = styled('div', {
    span:{
       display: 'block',
       position: 'relative',
       bottom: '2.5rem',
       left:'10.5rem',
    },

    '@media screen and (max-width: 1050px)':{
        margin:'0 auto'
    },

    '@media screen and (max-width: 850px)':{
        span:{
            position: 'static'
        }
    }
})

export const Detach = styled('span',{
    color: '$color-logo'
})