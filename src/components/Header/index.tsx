import Image from "next/image"
import logoImg from "../../../public/logo.svg"
import logoMetaMask from "../../../public/logo_MetaMask.svg"
import { HeaderContainer } from "./style"
export default function Header(){
    return (
        <HeaderContainer>
            <Image src={logoImg} alt="" />
            <nav>
                <ul>
                    <li>
                        <a href="">Comprar NFT</a>
                    </li>
                    <li>
                        <a href="">Sobre</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                </ul>
            </nav>
            <button><Image src={logoMetaMask} alt="" width={30} height={30} />Conectar carteira</button>    
        </HeaderContainer>
    )
}