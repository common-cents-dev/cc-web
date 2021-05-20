import React, { useState, useEffect} from 'react';
import Event from './Event';
import db from '../hooks/firestore';

function EventList() {
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        return db.collection('cc-wide-events').get()
        .then(snap => {
            let docs = [];
            snap.docs.forEach(doc => {
                console.log(doc.data());
                docs.push(doc.data());
            });
            docs.sort(function(a, b) {
                return b.date - a.date;
              });
            return docs;
        });
    }

    useEffect(() => {
        (async () => {
            const allEvents = await getEvents();
            setEvents(allEvents);
        })();
    }, []);

    useEffect(() => {
        events.sort(function(a, b) {
            return b.date - a.date;
          });
    }, [events]);

    // const [displayedEvents, setDisplayed] = useState(props.events);
    
    // useEffect(() => {
    //     setDisplayed(props.events);
    // }, [props.events]);

    // useEffect(() => {
    //     displayedEvents.sort(function(a, b) {
    //         return a.date - b.date;
    //       });
    // }, [displayedEvents]);
    
    return (
            <div class = "box py-8">
                <div class = "title has-text-centered">2020-21 Events</div>
                {/* <div class="control has-icons-left">
                    <div class="select">
                        <select onChange = {e => setDisplayed(e.target.value !== "0" ? props.events.filter(apt => apt.bedrooms === parseInt(e.target.value)) : props.events)}>
                        <option value = {0} selected>All</option>
                        <option value = {1}>1BR</option>
                        <option value = {2} >2BR</option>
                        <option value = {3}>3BR</option>
                        <option value = {4}>4BR</option>
                        <option value = {5}>5BR</option>
                        </select>
                    </div>
                    <div class="icon is-small is-left">
                        <i class="fas f-list-ol"></i>
                    </div>
                </div> */}
                <hr></hr>
                <div class = "columns is-multiline">
                    {events && events.map((a, i) => (
                                        <Event {...a} key={i}/>
                    ))}
                </div>
            </div>
    );
}

export default EventList;