import React from "react";
import "./styles/Home.css";
import logoConf from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home__container">
          <div className="Home__container-text">
            <img src={logoConf} alt="Logo Home" />
            <h1>Print your badges</h1>
            <h5>The easiest way to manage your conference</h5>
            <Link to="/badges">
              <button className="btn btn-primary">Start now</button>
            </Link>
          </div>
          <figure className="Home-image">
            <img src={astronauts} alt="" />
          </figure>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
