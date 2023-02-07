import Image from 'next/image'
import groupArtists from '../../../public/group-avarts.png'
import badgeImg from '../../../public/badge.svg'
import { BannerTopContainer, Detach, LeftContainer, SelectedArtistContainer } from './style'

export default function BannerTop(){
    return (
    <BannerTopContainer>
        <LeftContainer>
            <p>
                Mercado digital para colecionáveis em
                criptos e tokens não fungível (NFT).
                Compra, venda e descubra ativos digitais 
                exclusivos para você
            </p>

            <SelectedArtistContainer>
                <Image src={groupArtists} alt="" />
                <span><b>+10</b></span>
                <span>Artistas Selecionados</span>
            </SelectedArtistContainer>
        </LeftContainer>

        <h2>Descubra a verdadeira arte digital e 
            colecione diversas <Detach>NFTs</Detach></h2>

        <Image src={badgeImg} alt=""/>
    </BannerTopContainer>
    )
}