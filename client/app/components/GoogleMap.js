import React from 'react';

const locations = {
  'Oceania':        [-13.431129, 134.1783639],
  'North America':  [36.2106946, -113.7217515],
  'Europe':         [48.0997728, 4.1534819],
  'Asia':           [23.7027273, 62.3750637],
  'Africa':         [-3.6872377, -20.6307395],
  'Russia':         [49.7361415, 68.7625474],
  'South America':  [-15.2171868, -99.7801229],
};

export default class GoogleMap extends React.Component {
	render() {
    return (
      <div ref="mapCanvas" className="g-map" ></div>
    )
  }

  // componentWillReceiveProps(nextProps) {
  //   this.drawMap(nextProps);
  // }

  componentDidMount() {
    this.map = this.createMap();
    // this.marker = this.createMarker();
    // this.infoWindow = this.createInfoWindow()
  }

  createMap() {
    let mapOptions = {
      zoom: 4,
      center: this.mapCenter(),
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions);
  }

  mapCenter() {
    let position = {
      lat: locations[this.props.location][0],
      lng: locations[this.props.location][1],
    };
    return new google.maps.LatLng(
      position.lat,
      position.lng
    );
  }

 //  createMarker() {
 //    return new google.maps.Marker({
 //      position: this.mapCenter(),
 //      map: this.map
 //    });
	// }

  // createInfoWindow() {
  //   let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
  //   return new google.maps.InfoWindow({
  //     map: this.map,
  //     anchor: this.marker,
  //     content: contentString
  //   })
  // }

  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    });
  }
}
