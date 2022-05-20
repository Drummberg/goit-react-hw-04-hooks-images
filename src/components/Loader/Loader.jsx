import FadeLoader from 'react-spinners/FadeLoader';
import { LoaderDiv } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderDiv>
      <FadeLoader margin={4} size={13} color={'#F8E71C'} />
    </LoaderDiv>
  );
};

export default Loader;
