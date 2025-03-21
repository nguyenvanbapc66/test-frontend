import React from 'react';
import styled from 'styled-components';

import mapImage from '../../assets/images/image-activities-map.png';

export type Location = {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
};

type HomeMapProps = {
  locations: Location[];
  selectedLocation: Location | null;
  setSelectedLocation: (position: Location | null) => void;
};

const HomeMap: React.FC<HomeMapProps> = ({ locations, selectedLocation, setSelectedLocation }) => {
  const handleLocationClick = (location: Location) => {
    if (selectedLocation?.id === location.id) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(location);
    }
  };

  const resetMap = () => {
    setSelectedLocation(null);
  };

  return (
    <StyledHomeMap
      className='homeMap'
      $isZoomed={selectedLocation !== null}
      $zoomPosition={{
        x: selectedLocation?.coordinates.x ? 50 - selectedLocation?.coordinates.x : 0,
        y: selectedLocation?.coordinates.y ? 50 - selectedLocation?.coordinates.y : 0,
      }}
    >
      <div className='homeMap-mapContainer'>
        <div className='homeMap-mapContainer-wrapper'>
          <img src={mapImage} alt='Interactive Map' className='homeMap-mapContainer-image' />

          {locations.map((location) => (
            <button
              key={location.id}
              className={`homeMap-mapContainer-marker ${selectedLocation?.id === location.id ? 'active' : ''}`}
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
              }}
              onClick={() => handleLocationClick(location)}
            >
              {location.icon}
            </button>
          ))}
        </div>
      </div>

      {selectedLocation && (
        <div className='homeMap-locationInfo'>
          <h3>{selectedLocation.name}</h3>
          <button onClick={resetMap}>Reset View</button>
        </div>
      )}
    </StyledHomeMap>
  );
};

export default HomeMap;

const StyledHomeMap = styled.div<{ $isZoomed: boolean; $zoomPosition: { x: number; y: number } }>`
  position: relative;
  overflow: hidden;

  .homeMap-mapContainer {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    overflow: hidden;

    .homeMap-mapContainer-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      transform-origin: center center;
      transform: ${(props) =>
        props.$isZoomed ? `scale(2) translate(${props.$zoomPosition.x}%, ${props.$zoomPosition.y}%)` : 'none'};
      transition: transform 0.3s ease-in-out;
    }

    .homeMap-mapContainer-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .homeMap-mapContainer-marker {
      position: absolute;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease;

      &:hover {
        transform: translate(-50%, -50%) scale(1.2);
      }

      &.active {
        transform: translate(-50%, -50%) scale(1.2);
      }

      svg {
        width: 75px;
        height: 75px;
      }
    }
  }

  .homeMap-locationInfo {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    h3 {
      margin: 0 0 10px 0;
    }

    ul {
      margin: 0;
      padding-left: 20px;
    }

    button {
      margin-top: 10px;
      padding: 5px 10px;
      background-color: #ff4444;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #ff8800;
    }
  }
`;
