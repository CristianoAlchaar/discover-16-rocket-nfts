import { styled } from "../../styles";

export const GalleryContainer = styled('div',{
    width: '88%',
    margin: '6.25rem auto 0rem auto',
    
    ul:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1rem 2rem',
        justifyContent: 'center',

        img:{
            border: '1px solid #FFFFFF',
        }
    }
})