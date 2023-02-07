import { ButtonUp, EmailInputCard, FooterContainer, MidSection, NavCard } from "./style";
import arrowUpImg from '../../../public/arrow-black.svg';
import instagramImg from '../../../public/instagram.svg';
import youtubeImg from '../../../public/youtube.svg';
import twitterImg from '../../../public/twitter.svg';
import emailImg from '../../../public/email.svg';
import Image from "next/image";

export default function FooterMain() {
    return (
        <FooterContainer>
            <header>
                <h2>Rocket 
                    <span>NFTs</span>
                </h2>
                <ButtonUp onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Image src={arrowUpImg} alt="" width="24" height="24"/></ButtonUp>   
            </header>
            <MidSection>
                <EmailInputCard>
                    <p>
                        Fique por dentro de 
                        <span>
                            todas as novidades
                        </span>
                    </p>
                    <form onSubmit={() => window.alert('Email Cadastrado!')}>
                        <input type="email" placeholder="nft@rocketseat.com.br"/>
                        <button type="submit">Enviar</button>
                    </form>
                </EmailInputCard>
                <NavCard>
                    <table>
                        <thead>
                            <tr>
                                <th>Empresa</th>
                                <th>Mapa</th>
                                <th>Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="">Sobre</a></td>
                                <td><a href="">Galeria</a></td>
                                <td><a href="">FAQs</a></td>
                            </tr>
                            <tr>
                                <td><a href="">Serviços</a></td>
                                <td><a href="">Populares</a></td>
                                <td><a href="">Termos</a></td>
                            </tr>
                            <tr>
                                <td><a href="">Time</a></td>
                                <td><a href="">Vendas</a></td>
                                <td><a href="">Política</a></td>
                            </tr>
                            <tr>
                                <td><a href="">Carreira</a></td>
                                <td><a href="">Contato</a></td>
                                <td><a href="">Ajuda</a></td>
                            </tr>
                        </tbody>
                    </table>
                </NavCard>
            </MidSection>   
            <footer>
                    <a href="www.rocketseat.com.br">www.rocketseat.com.br</a>

                    <ul>
                        <li>
                            <a href=''>
                                <Image src={instagramImg} alt="Link do Instagram" width={30} height={30} />
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <Image src={youtubeImg} alt="Link do YouTube" width={30} height={30} />
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <Image src={twitterImg} alt="Link do Twitter" width={30} height={30} />
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <Image src={emailImg} alt="Link do Instagram" width={30} height={30} />
                            </a>
                        </li>
                    </ul>
                </footer>
        </FooterContainer>
    )
}