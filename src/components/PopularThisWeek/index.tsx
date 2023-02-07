import astronaut1Img from '../../../public/astronauta-1.png'
import astronaut2Img from '../../../public/astronauta-2.png'
import astronaut3Img from '../../../public/astronauta-3.png'
import astronaut4Img from '../../../public/astronauta-4.png'
import Astronaut from './components/Astronaut'
import { AsthronautsContainer, Detach, PopularContainer } from './style'

export default function PopularThisWeek(){
    return (
        <PopularContainer>
            <h2><Detach>Populares</Detach> da Semana</h2>
            <AsthronautsContainer>
                <div>
                    <Astronaut 
                        key={1}
                        title='Astronauta 1' 
                        authorName='Mayk Brito'
                        price='1.50'
                        imgUrl={astronaut1Img}
                    />
                    <Astronaut 
                        key={2}
                        title='Astronauta 2' 
                        authorName='Jakeliny Gracielly'
                        price='2.0'
                        imgUrl={astronaut2Img}
                    />
                </div>
                <div>
                    <Astronaut 
                        key={3}
                        title='Astronauta 3' 
                        authorName='João Inácio (Biro)'
                        price='3.75'
                        imgUrl={astronaut3Img}
                    />
                    <Astronaut 
                        key={4}
                        title='Astronauta 4' 
                        authorName='Tamires Santos'
                        price='4.30'
                        imgUrl={astronaut4Img}
                    />
                </div>
            </AsthronautsContainer>
        </PopularContainer>
    )
}