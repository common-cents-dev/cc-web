import React, { useState, useEffect, Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
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
 
 
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCA7XfkrKxpoXIfOM8qxM9iQogDdnLe14M'
  })(MapContainer);
 