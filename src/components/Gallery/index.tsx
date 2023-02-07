import Image from "next/image";
import img1 from "../../../public/galeria-1.png";
import img2 from "../../../public/galeria-2.png";
import img3 from "../../../public/galeria-3.png";
import img4 from "../../../public/galeria-4.png";
import img5 from "../../../public/galeria-5.png";
import img6 from "../../../public/galeria-6.png";
import img7 from "../../../public/galeria-7.png";
import img8 from "../../../public/galeria-8.png";
import { GalleryContainer } from "./style";

export default function Gallery(){
    return (
        <GalleryContainer>
            <ul>
                <li>
                    <Image src={img1} alt="" priority={true}/>
                </li>
                <li>
                    <Image src={img2} alt="" />
                </li>
                <li>
                    <Image src={img3} alt="" />
                </li>
                <li>
                    <Image src={img4} alt="" />
                </li>
                <li>
                    <Image src={img5} alt="" />
                </li>
                <li>
                    <Image src={img6} alt="" />
                </li>
                <li>
                    <Image src={img7} alt="" />
                </li>
                <li>
                    <Image src={img8} alt="" />
                </li>
            </ul>
        </GalleryContainer>
    )
}