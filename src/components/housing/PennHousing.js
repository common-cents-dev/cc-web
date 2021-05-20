import React, { useState, useEffect, Component } from 'react';
import db from '../hooks/firestore';
import ApartmentList from "./ApartmentList";
import Map from "./PennMap";
import Matrix from "./PennMatrix";

function Housing() { 
    const [apartments, setApartments] = useState([]);
    const [tab, setTab] = useState("matrix");
    
    const getApartments = () => {
        return db.collection('apartments').get()
        .then(snap => {
            let docs = [];
            snap.docs.forEach(doc => {
                let rooms = [];
                let aptDict = doc.data();
                Object.keys(aptDict).forEach(key => {
                    if ((key.includes("BA") && key.includes("BR")) || key.includes("Studio")) {
                        rooms.push(aptDict[key]);
                        delete aptDict[key];
                    }
                });
                rooms.forEach(room => {
                    let apt = {...aptDict, ...room};
                    docs.push(apt);
                });
            });
            return docs;
        });
    }
  
    useEffect(() => {
        (async () => {
            const allApartments = await getApartments();
            setApartments(allApartments);
        })();
    }, []);

    function openTab(evt, tabName) {
        console.log(tabName);
        var i, x, tablinks;
        x = document.getElementsByClassName("content-tab");
        for (i = 0; i < x.length; i++) {
            x[i].className = "content-tab is-hidden";
    
        }
        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            if (tablinks[i]) {
                tablinks[i].className = "tab";
            }
        }
        document.getElementById(tabName).className.replace("is-hidden", "is-active");
    
        evt.currentTarget.className += " is-active";
        console.log(evt.currentTarget);

        setTab(tabName);
    }

    useEffect(() => {
        document.getElementById(tab).classList.add('is-active');
        document.getElementById(tab).classList.remove('is-hidden');
    }, [tab]);

    const mapStyles = {
      width: '100%',
      height: '100%'
    };
    
    return(
        <section>
        <div>
            <div class="container">
                <div class = "box ">
                    <Map />
                </div>
                <div class="tabs is-centered">
                    <ul>
                        <li class="is-active tab" data-target = "apartmentList" onClick = {(event) => openTab(event, "list")}>
                            <a>
                                <span class="icon is-small"><i class="fas fa-list" aria-hidden="true"></i></span>
                                <span>List</span>
                            </a>
                        </li>
                        <li class = "tab is-active" data-target = "matrix" onClick = {(event) => openTab(event, "matrix")}>
                            <a>
                                <span class="icon is-small"><i class="fas fa-table" aria-hidden="true"></i></span>
                                <span>Table</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id = "tab-content">
                    <div id = "list" class = "content-tab">
                        <ApartmentList apartments = {apartments} />
                    </div>
                    <div id = "matrix" class = "content-tab">
                        <Matrix />
                    </div>
                </div>
            </div>
        </div> 
    </section>
        );
}

export default Housing;
