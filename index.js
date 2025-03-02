import react from "react"
import reactDOM from "react-dom/client"
import "./style.css"
import one from "one.jpg"
import two from "two.jpg"
import three from "three.jpg"
import four from "four.jpg"
import five from "five.jpg"
import six from ".six.jpg"
import seven from "seven.jpg"
import eight from "eight.jpg"

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
