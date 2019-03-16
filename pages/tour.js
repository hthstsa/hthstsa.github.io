import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const markers = [
  { markerOffset: -9, name: "New York City", coordinates: [-74.0060, 40.7128] },
  { markerOffset: -9, name: "Las Vegas", coordinates: [-115.1398, 36.1699] },
  { markerOffset: -9, name: "Pittsburgh", coordinates: [-79.9959, 40.4406] },
  { markerOffset: -9, name: "Charlotte", coordinates: [-80.8431, 35.2271] },
  { markerOffset: -9, name: "Miami", coordinates: [-80.1918, 25.7617] },
  { markerOffset: -9, name: "Dallas", coordinates: [-96.7970, 32.7767] },
  { markerOffset: -9, name: "Detroit", coordinates: [-83.0458, 42.3314] },
  { markerOffset: -9, name: "Chicago", coordinates: [-87.9298, 41.8781] },
  { markerOffset: -9, name: "New Orleans", coordinates: [-90.0715, 29.9511] },
  { markerOffset: -9, name: "Albuquerque", coordinates: [-106.6504, 35.0844] },
  { markerOffset: -9, name: "Boston", coordinates: [-71.0589, 42.3601] },
  { markerOffset: -9, name: "St. Louis", coordinates: [-90.5994, 38.6270] },
  { markerOffset: -9, name: "Omaha", coordinates: [-96.5345, 41.2565] },
  { markerOffset: -9, name: "Portland", coordinates: [-122.6587, 45.5122] },
  { markerOffset: -9, name: "Minneapolis", coordinates: [-93.2650, 44.9778] },
  { markerOffset: -9, name: "Denver", coordinates: [-104.9903, 39.7392] },
  { markerOffset: -9, name: "Atlanta", coordinates: [-84.3880, 33.7490] },
]

class AlbersUSA extends Component {
  render() {

    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection="albersUsa"
          projectionConfig={{
            scale: 1000,
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup disablePanning>
            <Geographies geography="/static/states.json" disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) => {
                  return (
                    <Geography
                      key={`state-${geography.properties.ID_1}`}
                      cacheId={`state-${geography.properties.ID_1}`}
                      round
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#FBE9E7",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#607D8B",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#FF5722",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  )
                }
              )}
            </Geographies>
            
            <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { fill: "#8B0000" },
                    hover: { fill: "#FF0000" },
                    pressed: { fill: "#FF5722" },
                  }}
                  >
                  <circle
                    cx={0}
                    cy={0}
                    r={5}
                    style={{
                      stroke: "#8B0000",
                      strokeWidth: 3,
                      opacity: 0.9,
                    }}
                  />
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fill: "#000000",
                    }}
                    >
                    {marker.name}
                  </text>
                </Marker>
              ))}
            </Markers>
            
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default AlbersUSA