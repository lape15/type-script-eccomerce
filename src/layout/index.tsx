import Card from '../components/card/card';
import ImageCard from '../components/image-card/image-card';
import './layout.scss';

const LayOut = () => {
  return (
    <div className="flex-item row p-1 layout items-center">
      <ImageCard />
      <Card />
    </div>
  );
};

export default LayOut;
