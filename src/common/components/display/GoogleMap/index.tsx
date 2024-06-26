import useMediaQuery from "@/common/hooks/media-query.hook";
import { GOOGLE_MAP_STYLERS } from "@/data/constants/google.constant";
import { IFacilitateForRent } from "@/data/mocks/facilitate";
import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Libraries,
  Marker,
  useJsApiLoader
} from "@react-google-maps/api";
import React, { useEffect, useMemo } from "react";
import useGoogleMapService from "./service";

const containerStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  borderRadius: '10px'
};

export interface IGoogleMapProps {
  center: IFacilitateForRent; // Replace with your desired initial longitude
  markers?: IFacilitateForRent[];
  myLocation?: IFacilitateForRent;
  onRouteDistance?: (routeDistance: any) => void;
  onClick?: (data: google.maps.MapMouseEvent) => void;
  isSelecting?: boolean;
  onSelectedOnMap?: (
    data: google.maps.LatLng | google.maps.LatLngLiteral
  ) => void;
  onPovKilometerComputed?: (km: number) => void,
  onLoad?: () => void
  zoom?: number
}

const GoogleMapComponent: React.FC<IGoogleMapProps> = (props) => {
  const isMobile = useMediaQuery('(max-width:640px)');
  const {
    center,
    markers,
    onClick,
    isSelecting,
    onLoad,
    zoom
  } = props

  const {
    handleCenterChanged,
    directions,
    mapCenter,
    mapRef
  } = useGoogleMapService(props)

  const libs: Libraries = useMemo(() => {
    return ['geometry', 'marker', 'maps', 'routes']
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY || "",
    libraries: libs
  });

  useEffect(() => {
    if (isLoaded) {
      onLoad?.()
    }
  }, [isLoaded])

  return (
    isLoaded && <GoogleMap
      options={{
        styles: GOOGLE_MAP_STYLERS,
      }}
      mapContainerStyle={containerStyle}
      center={center?.mapData}
      zoom={zoom || 18}
      onClick={(e) => {
        if (isSelecting) {
          onClick?.(e);
        }
      }}
      onCenterChanged={handleCenterChanged}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >
      {markers?.map((marker, i) => (
        <InfoWindow key={`${marker.title}-${i}`} position={marker.mapData}>
          <div className="flex flex-col gap-1">

            <div>
              <h3>
                <b className="font-bold">
                  ₱ {marker?.pricePerMonth?.toLocaleString()}
                </b>
              </h3>
            </div>
          </div>
        </InfoWindow>
      ))}
      {directions && (
        <DirectionsRenderer
          options={{
            polylineOptions: {
              strokeColor: "red", // Set the route color to red
              strokeWeight: 2, // Set the route line thickness
            },
          }}
          directions={directions}
        />
      )}
      {isSelecting && (
        <Marker
          position={mapCenter}
          icon={{
            path: 1,
            scale: 5,
            fillColor: "#d35400",
            rotation: 50,
            strokeColor: "#e74c3c",
          }}
          options={{
            position: mapCenter,
          }}
        />
      )}

    </GoogleMap>
  );
};

export default GoogleMapComponent;
