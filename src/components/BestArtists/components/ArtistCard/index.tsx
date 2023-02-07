import Image, { StaticImageData } from "next/image";
import { Artist } from "./style";

interface artistProps{
    imgUrl: StaticImageData,
    artistName: string,
    photographyNumber: string,
}

export default function ArtistCard({imgUrl, artistName, photographyNumber} : artistProps){
    return (
        <Artist>
            <span>
                <Image src={imgUrl} alt='' width={100} height={100}/>
            </span>
            <div>
                <span>{artistName}</span>
                <span>{photographyNumber} Fotografias</span>
            </div>
        </Artist>
    )
}