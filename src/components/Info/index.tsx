import Image from "next/image";
import { InfoContainer, TextContainer, Detach } from "./style";
import bannerImg from "../../../public/banner2.png";

export default function Info(){
    return(
        <InfoContainer>
            <aside>
                <ul>
                    <li>
                        <span>10K+</span>
                        <span>Artes</span>
                    </li>
                    <li>
                        <span>200+</span>
                        <span>Vendas</span>
                    </li>
                    <li>
                        <span>20</span>
                        <span>Artistas</span>
                    </li>
                </ul>
            </aside>
            <div>
                <TextContainer>
                    <span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Congue malesuada amet pretium lacus. Id <Detach>potenti diam</Detach> et 
                            cras odio viverra. Amet, velit ut hac sit. Enim ultricies 
                            mauris mattis nunc semper.
                        </p>
                        <span>Lorem ipsum</span>
                    </span>
                    <span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Congue malesuada amet pretium lacus. Id <Detach>potenti diam</Detach> et 
                            cras odio viverra. Amet, velit ut hac sit. Enim ultricies 
                            mauris mattis nunc semper.
                        </p>
                        <span>Lorem ipsum</span>
                    </span>
                </TextContainer>
                <Image src={bannerImg} alt="" style={{
                    width: '100%',
                    maxHeight: '300px',
                    minHeight: '150px',
                    height: 'auto',
                }}/>
            </div>
        </InfoContainer>    
    )
}