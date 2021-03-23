import React from "react";
import { Chrono } from "react-chrono";
import data from "./UpcomingItems";

class EventsCalendar extends React.Component{
    render(){
        return(
            <div style={{ width: "100%", height: "100%" }}>
                <Chrono
                items={data}
                mode="VERTICAL_ALTERNATING"
                hideControls
                scrollable={false}
                >
                </Chrono>
            </div>
          );
    }
}

export default EventsCalendar;
