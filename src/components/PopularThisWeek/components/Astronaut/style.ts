import { styled } from "../../../../styles";

export const AstronautCard = styled('span',{
    width: '21.875rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    
    h3: {
        fontWeight: '500',
        fontSize: '1.875rem',
        lineHeight: '2.3125rem',
    },

    h4:{
        fontWeight: '600',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',  
        color: '$subtitle-color'
    },

    span: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',       
    }
})

export const Price = styled('span',{
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    color: '$color-logo',
})