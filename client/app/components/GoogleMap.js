import React from 'react';

const locations = {
  'Oceania':        [-3.5141071, 126.6769916],
  'North America':  [36.2106946, -97.250977],
  'Europe':         [48.0997728, 10.1534819],
  'Asia':           [21.2644949, 112.976414],
  'Africa':         [11.6972377, 26.6307395],
  'Russia':         [49.7361415, 68.7625474],
  'South America':  [-11.781998, -57.5417584],
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
      zoom: 3,
      disableDefaultUI: true,
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
