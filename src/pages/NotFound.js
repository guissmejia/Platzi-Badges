import React from "react";
import "./styles/NotFound.css";
import image404 from "../images/404.webp";

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="NotFound__container">
          <img className="NotFound-image" src={image404} alt="Image Fail" />
          <h2>Hmmmm... No encontramos lo que buscas</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
