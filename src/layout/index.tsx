import Card from "../components/card/card";
import ImageCard from "../components/image-card/image-card";
import './layout.scss'
type Props = {
    title: string
}

const LayOut = (props:Props) => {
 return <div className="flex-item row p-1 layout items-center">
     <ImageCard title="k"/>
     <Card/>
 </div>;
}

export default LayOut