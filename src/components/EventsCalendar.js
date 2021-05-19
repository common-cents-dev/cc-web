import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class EventsCalendar extends React.Component{
    render(){
        return(
            <div>
                <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        events={[
                            { title: 'Taxes 101', date: '2021-04-01' },
                            {title: 'Finessing Your Finances', date: '2021-04-08' },
                            { title: 'Fintech Revolution', date: '2021-04-15' },
                            { title: 'Credit Card Hacks', date: '2021-04-22' },
                          ]}
                    />
          </div>
          );
    }
}

export default EventsCalendar;
