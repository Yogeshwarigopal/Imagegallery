import react from "react"
import reactDOM from "react-dom/client"
import "./style.css"
import one from "./assert/images/one.jpg"
import two from "./assert/images/two.jpg"
import three from "./assert/images/three.jpg"
import four from "./assert/images/four.jpg"
import five from "./assert/images/five.jpg"
import six from "./assert/images/six.jpg"
import seven from "./assert/images/seven.jpg"
import eight from "./assert/images/eight.jpg"

const root = reactDOM.createRoot(document.getElementById("root"))
function Gallery(props){
  return(
    <div className="container">
      <div className="imagegallery">
        <img src={one} alt="Alaskan Malamute"></img>
        <p>Alaskan Malamute</p>
      </div>
      <div className="imagegallery">
        <img src={two} alt="Australian Cattle Dog"></img>
        <p>Australian Cattle Dog</p>
      </div>
      <div className="imagegallery">
        <img src={three} alt="Bulldog"></img>
        <p>Bulldog</p>
      </div>
      <div className="imagegallery">
        <img src={four} alt="Chihuahua"></img>
        <p>Chihuahu</p>
      </div>
      <div className="imagegallery">
        <img src={five} alt="Dachshund"></img>
        <p>Dachshund</p>
      </div>
      <div className="imagegallery">
        <img src={six} alt="German Shepherd"></img>
        <p>German Shepherd</p>
      </div>
      <div className="imagegallery">
        <img src={seven} alt="Golden Retriever"></img>
        <p>Golden Retriever</p>
      </div>
      <div className="imagegallery">
        <img src={eight} alt="Siberian Husky"></img>
        <p>Siberian Husky</p>
      </div>
    </div>
  )
}
root.render(
  <Gallery></Gallery>
)
