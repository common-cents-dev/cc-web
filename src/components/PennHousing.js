import React, { useState, useEffect, Component } from 'react';
import db from './housing/firestore';
import ApartmentList from "./housing/ApartmentList";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    let markers = [ // Just an example this should probably be in your state or props.
      {
        name: "Chestnut Hall Apartments",
        position: { lat: 39.954973, lng: -75.200315 }
      },
      {
        name: "The Radian",
        position: { lat: 39.954236, lng: -75.201192 }
      },
      {
        name: "4200 Ludlow Street",
        position: { lat: 39.956731, lng: -75.206426 }
      },
      {
        name: "Hamilton Court (HAMCO)",
        position: { lat: 39.955058, lng: -75.199624 }
      },
      {
        name: "Luna on Pine",
        position: { lat: 39.950541, lng: -75.203811 }
      },
      {
        name: "Good Food Flats",
        position: { lat: 39.960108, lng: -75.203258 }
      },
      {
        name: "The Branden Apartments",
        position: { lat: 39.95613, lng: -75.203817 }
      },
      {
        name: "Elizabeth Court",
        position: { lat: 39.950114, lng: -75.204306 }
      },
      {
        name: "Castle Hill Apartments",
        position: { lat: 39.952758, lng: -75.209389 }
      },
      {
        name: "Osage Manor Apartments",
        position: { lat: 39.951085, lng: -75.211108 }
      },
      {
        name: "The Hub",
        position: { lat: 39.955927, lng: -75.202003 }
      },
      {
        name: "3737 Korman",
        position: { lat: 39.95536, lng: -75.197992 }
      },
      {
        name: "The Chestnut",
        position: { lat: 39.954751, lng: -75.197536 }
      },
      {
        name: "Axis",
        position: { lat: 39.955337, lng: -75.19461 }
      },
      {
        name: "Domus",
        position: { lat: 39.954685, lng: -75.192275 }
      }
    ];
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 39.953923, lng: -75.199415 }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index} // Need to be unique
            onClick={this.onMarkerClick}
            name={marker.name}
            position={marker.position}
            icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCA7XfkrKxpoXIfOM8qxM9iQogDdnLe14M'
// })(MapContainer);

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
    
    return(
        <section>
        <div>
            <div class="container">
                <div class = "box">
                <iframe src="https://snazzymaps.com/embed/287523" width="100%" height="600px" style = {{"height": "75vh"}}></iframe>
                </div>
                <div class="tabs is-centered">
                    <ul>
                        {/* <li class="is-active tab" data-target = "apartmentList" onClick = {(event) => openTab(event, "list")}>
                            <a>
                                <span class="icon is-small"><i class="fas fa-list" aria-hidden="true"></i></span>
                                <span>List</span>
                            </a>
                        </li> */}
                        <li class = "tab is-active" data-target = "matrix">
                            <a>
                                <span class="icon is-small"><i class="fas fa-table" aria-hidden="true"></i></span>
                                <span>Table</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id = "tab-content">
                    {/* <div id = "list" class = "content-tab">
                        <ApartmentList apartments = {apartments} />
                    </div> */}
                    <div id = "matrix" class = "content-tab is-hidden">
                        <table class="table table-bordered table-hover table-condensed">
                            <colgroup>
                                <col span="1" style={{"width": "30%"}}/>
                                <col span="1" style={{"width": "10%"}}/>
                                <col span="1" style={{"width": "10%"}}/>
                                <col span="1" style={{"width": "10%"}}/>
                                <col span="1" style={{"width": "10%"}}/>
                                <col span="1" style={{"width": "10%"}}/>
                                <col span="1" style={{"width": "20%"}}/>
                            </colgroup>
                            <thead><tr><th title="Field #1">Apartment Complex Name</th>
                            <th title="Field #2">1BR (Studio)</th>
                            <th title="Field #3">1BR</th>
                            <th title="Field #4">2BR</th>
                            <th title="Field #5">3BR</th>
                            <th title="Field #6">4BR</th>
                            <th title="Field #11">Contact</th>
                            </tr></thead>
                            <tbody><tr>
                            <td>Room in on-campus high rise (no LR or KIT)</td>
                            <td>N/A</td>
                            <td>$1376¹</td>
                            <td>$1376¹</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            </tr>
                            <tr>
                            <td>Apartment with shared rooms in on-campus high rise (with LR and KIT)</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>$1376¹</td>
                            <td>N/A</td>
                            <td>$1376²</td>
                            <td>N/A</td>
                            </tr>
                            <tr>
                            <td>Apartment with individual rooms in on-campus high rise (with LR and KIT)</td>
                            <td>N/A</td>
                            <td>$1927¹</td>
                            <td>$1927¹</td>
                            <td>$1927²</td>
                            <td>$1927²</td>
                            <td>N/A</td>
                            </tr>
                            <tr>
                            <td>The Radian</td>
                            <td>N/A</td>
                            <td>$2399¹</td>
                            <td>$1899²</td>
                            <td>$1599²</td>
                            <td>     $1509² | $1,649⁴</td>
                            <td>(215) 222-4212</td>
                            </tr>
                            <tr>
                            <td>The Simon</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>$1899²</td>
                            <td>$1400³</td>
                            <td>$1,375</td>
                            <td>(215) 382-1300</td>
                            </tr>
                            <tr>
                            <td>4200 Ludlow Street</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>$950²</td>
                            <td>$1,321-$1,470²</td>
                            <td>N/A</td>
                            <td>855-205-0500</td>
                            </tr>
                            <tr>
                            <td>HAMCO</td>
                            <td>N/A</td>
                            <td>$2,235-$2,285¹</td>
                            <td>$1,637-$1,787²</td>
                            <td>N/A</td>
                            <td>$1,462-$1,537²</td>
                            <td>(215) 987-5953</td>
                            </tr>
                            <tr>
                            <td>Chestnut Hall Apartments</td>
                            <td>$1091¹</td>
                            <td>$1290¹</td>
                            <td>$1819¹</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(484) 469-7015</td>
                            </tr>
                            <tr>
                            <td>Luna on Pine</td>
                            <td>$1,385-1,750¹</td>
                            <td>$1,800-$2,000¹</td>
                            <td>$1270¹</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(215) 966-8627</td>
                            </tr>
                            <tr>
                            <td>The Branden Apartments</td>
                            <td>$990¹</td>
                            <td>$1005¹</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(215) 222-2000</td>
                            </tr>
                            <tr>
                            <td>Elizabeth Court</td>
                            <td>$1295¹</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(215) 222-2000</td>
                            </tr>
                            <tr>
                            <td>The Hub</td>
                            <td>$1,195-$1,300¹</td>
                            <td>$1,195-$1,300¹</td>
                            <td>$1047-$1297¹</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(267) 990-9800</td>
                            </tr>
                            <tr>
                            <td>3737 (Korman)</td>
                            <td>N/A</td>
                            <td>$1979¹</td>
                            <td>$1597²</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(215) 622-9883</td>
                            </tr>
                            <tr>
                            <td>The Chestnut</td>
                            <td>$1,952-$2,312¹</td>
                            <td>$2,121-$3,260 ¹</td>
                            <td>$1460-$3000²</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(833) 876-4829</td>
                            </tr>
                            <tr>
                            <td>Axis</td>
                            <td>$1,200-$1,300¹</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(215) 662-0802</td>
                            </tr>
                            <tr>
                            <td>Domus</td>
                            <td>N/A</td>
                            <td>$2278¹</td>
                            <td>$1790²</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>(215) 240-6202</td>
                            </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div> 
    </section>
        );
}

export default Housing;
