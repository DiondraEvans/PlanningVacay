import '../filterbar/index.css';
import Cabins from './images/image1.png'
import Amazingviews from './images/image2.png'
import Omg from './images/image3.png'
import Containers from './images/image4.png'
import Beach from './images/image5.png'
import Mansions from './images/image6.png'
import Beachfront from './images/image7.png'
import Treehouses from './images/image8.png'
import Lakefront from './images/image9.png'
import Tinyhomes from './images/image10.png'
import Privaterooms from './images/image11.png'
import Luxe from './images/image12.png'
import Trending from './images/image13.png'
import Amazingpools from './images/image14.png'

function GetFilterBar() {

  return (
    <div className="filter-container">
      <div>
        <img src={Cabins} className="f-pic"></img>
        <p></p>
      </div>
      <div>
        <img src={Amazingviews} className="f-pic"></img>
        <p></p>
      </div>
      <div>
      <img src={Omg} className="f-pic"></img>
      <p></p>
      </div>
      <div>
      <img src={Containers} className="f-pic"></img>
      <p></p>
      </div>
      <div>
      <img src={Beach} className="f-pic"></img>
      <p></p>
      </div>
      <div>
      <img src={Mansions} className="f-pic"></img>
      <p></p>
      </div>
      <div>
        <img src={Beachfront} className="f-pic"></img>
        <p></p>
      </div>
      <div>
        <img src={Treehouses} className="f-pic"></img>
        <p></p>
      </div>
      <div>
        <img src={Lakefront} className="f-pic"></img>
        <p></p>
      </div>
      <div>
        <img src={Tinyhomes} className="f-pic"></img>
        <p></p>
      </div>
      <div>
        <img src={Privaterooms} className="f-pic"></img>
        <p></p>
      </div>
      <div>
         <img src={Luxe} className="f-pic"></img>
         <p></p>
      </div>
      <div>
        <img src={Trending} className="f-pic"></img>
        <p></p>
      </div>
      <div>
        <img src={Amazingpools} className="f-pic"></img>
        <p></p>
      </div>
      <div className="m-filters"><p>Filters</p></div>
    </div>
    
  );
}

export default GetFilterBar;