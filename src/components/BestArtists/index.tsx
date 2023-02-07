import ArtistCard from "./components/ArtistCard";
import artistImg1 from "../../../public/artista-1.png";
import artistImg2 from "../../../public/artista-2.png";
import artistImg3 from "../../../public/artista-3.png";
import artistImg4 from "../../../public/artista-4.png";
import artistImg5 from "../../../public/artista-5.png";
import artistImg6 from "../../../public/artista-6.png";
import arrowOrange from "../../../public/arrow-orange.svg"
import Image from "next/image";
import { ArtistCardContainer, BestArtistsContainer } from "./style";

export default function BestArtists(){
    return (
        <BestArtistsContainer>
            <h2>Melhores <span>artistas</span></h2>
            <ArtistCardContainer>
                <ArtistCard 
                    imgUrl={artistImg1} 
                    artistName="Mayk Brito" 
                    photographyNumber="80" 
                    key={1} 
                />
                <ArtistCard 
                    imgUrl={artistImg2} 
                    artistName="Jakeliny G." 
                    photographyNumber="99" 
                    key={2} 
                />
                <ArtistCard 
                    imgUrl={artistImg3} 
                    artistName="João I. (Biro)" 
                    photographyNumber="50" 
                    key={3} 
                />
                <ArtistCard 
                    imgUrl={artistImg4} 
                    artistName="Tamires Santos" 
                    photographyNumber="43" 
                    key={4} 
                />
                <ArtistCard 
                    imgUrl={artistImg5} 
                    artistName="Ana Silva" 
                    photographyNumber="28" 
                    key={5} 
                />
                <ArtistCard 
                    imgUrl={artistImg6} 
                    artistName="Diego F." 
                    photographyNumber="20" 
                    key={6} 
                />
            </ArtistCardContainer>
            <footer>
                <span>Ver todos os artistas</span> <Image src={arrowOrange} alt="" width={30} height={30}/>
            </footer>
        </BestArtistsContainer>
    )
}