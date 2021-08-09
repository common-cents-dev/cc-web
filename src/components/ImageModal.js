import React from "react";
import timeline from "../images/recruitment-timeline-su21.png"

class ImageModal extends React.Component{
    render(){
        return(
          <section class="section">
            <div class="container">
                <div class = "box">
                    <img src={timeline} style = {{height: "90vh", width: "auto"}}/>
                  </div>
            </div>
          </section>
          );
    }
}
export default ImageModal;