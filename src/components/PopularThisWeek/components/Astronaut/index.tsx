import Image, { StaticImageData } from 'next/image'
import arrowImg from '../../../../../public/arrow-white.svg' 
import { AstronautCard, Price } from './style'

interface astronautProps {
    title: string,
    authorName: string,
    price: string,
    imgUrl : StaticImageData,
}

export default function Astronaut ({title, authorName, price, imgUrl} : astronautProps){
    return(
        <AstronautCard>
            <span>
                <h3>{title}</h3> 
                <Image src={arrowImg} alt="" />
            </span>
            <span>
                <h4>{authorName}</h4> 
                <Price>{`${price} RKT`}</Price>
            </span>
            <Image src={imgUrl} alt="" />
        </AstronautCard>
    )
}