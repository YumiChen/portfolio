import React,{Component} from "react";
import {about} from "../assets/data/data";
import {connect} from "react-redux";
import scroll from "../functions/scroll";
import Contacts from "../components/Contacts";
// import Waypoint from "react-waypoint";

class About_ extends Component{
    constructor(props){
      super(props);
      this.next = this.next.bind(this);
    }
   next(){
     scroll('.skills');
    }
    render(){
      let des = (this.props.lang=="EN")?about.EN:about.CH;
      return (
        <div className="about">

          <div id="aboutText">
          <p className="subTitle">Hello!</p>
            <div className="context">
              <p>{des}</p>
              {/* <a 
                className="resume"
                target = "_blank"
                href="https://yumichen.gitlab.io/Resume_R/">Resume / 履歷表</a> */}
              <Contacts/>
            </div>
          
          </div>
        <p className="next" onClick={this.next}>︾</p>

        </div>);
    }
  }

  const mapStateToProps_about=(state)=>{
    return {lang: state.lang};
  }
  
  const About = connect(mapStateToProps_about)(About_);

  module.exports = About;