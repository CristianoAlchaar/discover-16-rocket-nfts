import { styled } from "../../styles";

export const HeaderContainer = styled('header',{
    width: '88%',
    margin: '3.5625rem auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    ul : {
        listStyleType: 'none',
        fontSize: '1.125rem',
        display: 'flex',
        flexDirection: 'row', 
        gap: '2rem',

        'li:hover': {
            fontWeight: 'bold'
        }
    },

    button : {
        width: '14.375rem',
        height: '3.125rem',
        fontWeight: '700',
        fontSize: '1rem',
        color: '$black-text',
        backgroundColor: '$white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        borderRadius: '12px',

        '&:hover' : {
            filter: 'brightness(0.8)',
            transition: 'filter 0.5s',
        }
    },

    '@media screen and (max-width: 950px)' : {
        flexDirection: "column",   
        gap : '4rem',

        ul : {
            gap : '3rem',
        }
    }
})