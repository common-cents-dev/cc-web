import React from "react";
import timeline from "../images/recruitment-timeline-su21.png"

class ImageModal extends React.Component{
    render(){
        return(
            <div class = "columns">
                <div class = "column" data-aos="fade-down">
                  <div class = "card">
                      <div class = "card-content">
                        <figure class="image">
                        <img src={timeline} style = {{height: "90vh", width: "auto"}}/>
                        </figure>
                      </div>
                  </div>
                </div>
            </div>
          );
    }
}
export default ImageModal;