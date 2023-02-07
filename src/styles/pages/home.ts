import { styled } from '..'
import backgroundImg from '../../../public/background.png';

export const TopContainer = styled('div', {
  backgroundImage: `url(${backgroundImg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  paddingTop: '10px',
});