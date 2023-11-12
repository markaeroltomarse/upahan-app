import { getKilometerScopeOfMap } from "@/common/utils/google-map-api.util";
import { useEffect, useRef, useState } from "react";
import { IGoogleMapProps } from "..";

const useGoogleMapService = (props: IGoogleMapProps) => {
  const {
    center,
    markers,
    myLocation,
    onRouteDistance,
    onClick,
    isSelecting,
    onSelectedOnMap,
    onPovKilometerComputed,
    onLoad
  } = props;

  const [directions, setDirections] = useState<any>(null);
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [markerSize, setMarkerSize] = useState<google.maps.Size | null>(null);
  const [initialCenter, setInitialCenter] = useState<any>(null);
  const mapRef = useRef<any>();
  const [mapCenter, setMapCenter] = useState<any>(center);

  const directionsCallback = (response: any) => {
    if (response !== null && response.status === "OK") {
      console.log('directions', response)
      setDirections(response);

      // Calculate and set the route distance
      const route = response.routes[0];
      let totalDistance = 0; // Initialize total distance

      // Sum up the distances of individual steps
      for (const leg of route.legs) {
        totalDistance += leg.distance.value;
      }

      // Convert the distance from meters to kilometers
      const distanceInKilometers = totalDistance / 1000;
      onRouteDistance?.(distanceInKilometers);
    } else {
      console.log("Directions request failed!");
    }
  };

  const handleCenterChanged = () => {
    if (mapRef.current && isSelecting) {
      const newCenter = mapRef.current.getCenter();
      setMapCenter({
        lat: newCenter.lat() as number,
        lng: newCenter.lng() as number,
      });
      onSelectedOnMap?.({
        lat: newCenter.lat as number,
        lng: newCenter.lng as number,
      });
      getKilometerScopeOfMap({ bounds: mapRef.current.getBounds(), newCenter })
    }
  };

  useEffect(() => {
    const setGoogleContext = () => {
      setTimeout(() => {
        try {
          setMarkerSize(new google.maps.Size(40, 40));
        } catch (error) {
          setGoogleContext();
        }
      }, 1000);
    };
    setGoogleContext();
  }, []);

  // useEffect(() => {
  //   if (center && myLocation && center.mapData !== myLocation?.mapData && !isSelecting) {
  //     const loadDirectionGoogleContext = () => {
  //       setTimeout(() => {
  //         try {
  //           const directionsService = new google.maps.DirectionsService();

  //           directionsService.route(
  //             {
  //               origin: myLocation.mapData,
  //               destination: center.mapData,
  //               avoidHighways: true,
  //               avoidFerries: true,
  //               avoidTolls: true,
  //               travelMode: google.maps.TravelMode.DRIVING,
  //             },
  //             directionsCallback
  //           );

  //         } catch (error) {
  //           loadDirectionGoogleContext();
  //         }
  //       }, 1000);
  //     };
  //     loadDirectionGoogleContext();
  //   }
  // }, [center, myLocation, isSelecting]);

  return {
    handleCenterChanged,
    directions,
    mapCenter,
    mapRef,
  }
};

export default useGoogleMapService;
