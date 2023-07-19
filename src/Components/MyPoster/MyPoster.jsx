import "./myposter.scss";
import poster from "../../assets/my-photo.jpg";


function MyPoster() {
    return <img className="poster-img" src={poster} alt="My poster"/>
}

export default MyPoster;