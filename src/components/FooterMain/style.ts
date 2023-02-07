import { styled } from '../../../src/styles'

export const FooterContainer = styled('footer', {
    backgroundColor: '$card-color',
    
    header: {
        padding: '0 5.5rem',
        height: '13.875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #5A5757',

        h2: {
            fontWeight: '700',
            fontSize: '2.5rem',
            lineHeight: '3.0625rem',
            
            span: {
                color: '$color-logo'
            }
        },

        '@media screen and (max-width: 960px)': {
            width: '100%',
            padding: '0',
            justifyContent: 'space-around',
        }
    },

    footer: {
        padding: '0 5.5rem',
        height: '10.4375rem',
        color: '$subtitle-color',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid #5A5757',

        'a:hover': {
            fontWeight: '500',
        },

        ul: {
            display: 'flex',
            gap: '3.125rem',

            'li:hover': {
                filter: 'brightness(0.5)',
                transition: 'filter 0.2s',
            }   
        },

        '@media screen and (max-width: 730px)': {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        }
    },    
})

export const ButtonUp = styled('span', {
    width: '5rem',
    height: '5rem',
    backgroundColor: '$color-logo',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
        filter: 'brightness(0.8)',
        transition: 'filter 0.5s',
    }
})

export const MidSection = styled('div', {
    padding: 'auto 5.5rem auto 5.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media screen and (max-width: 960px)': {
        flexDirection: 'column',
    }
})

export const EmailInputCard = styled('div', {
    fontWeight: '500',
    fontSize: '1.875rem',
    lineHeight: '2.3125rem',
    borderRight: '1px solid $subtitle-color',
    paddingTop: '4.1875rem',
    paddingRight: '3.875rem',
    paddingBottom: '3.3125rem',
    paddingLeft: '3.875rem',

    '@media screen and (max-width: 960px)': {
        borderRight: 'none',   
    },

    '@media screen and (max-width: 550px)': {
        padding: '2rem 0 2rem 0'
    },

    p : {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',

        span: {
            color: '$color-logo'
        },
    },     

    form: {
        marginTop: '1.5625rem',
        display: 'flex',

        input: {    
            outline: 'none',
            width: '17.5rem',
            height: '4.125rem',
            backgroundColor: '$color-input',
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            paddingLeft: '1.25rem',
            border: 'none',
            color:'$white',
        },

        button: {
            width: '7.625rem',
            height: '4.125rem',
            fontWeight: '700',
            fontSize: '1.25rem',
            lineHeight: '1.5rem',

            '&:hover': {
                filter: 'brightness(0.8)',
                transition: 'filter 0.3s',
            }
        },

        '@media screen and (max-width: 450px)': {
            input: {
                width: '16rem',
            },
            button: {
                width: '6rem',
            }
        },
    }
})

export const NavCard = styled('nav', {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    
    table: {
        width: '90%',
        borderSpacing: '0.5rem',
        thead: {
            textAlign: 'left',
        },

        tbody: {
            color: '$subtitle-color',
        }
    },

    '@media screen and (max-width: 960px)': {
        width: '100%',

        table: {
            textAlign: 'center',

            thead: {
                textAlign: 'center',
            },
        }
    },

    '@media screen and (max-width: 450px)': {
        table: {
            width: '100%',
        }
    }   
})