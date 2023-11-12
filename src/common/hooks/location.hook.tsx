import { useState } from "react";

const useCurrentLocationService = () => {
    const [coords, setCoords] = useState({})
    const getMyLocation = (callback?: (coords: any) => void) => {
        // Get the current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coord = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }

                    callback?.(coord)
                    setCoords(coord)
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
            return coords
        } else {
            console.error("Geolocation is not supported by your browser.");
            return null
        }
    }

    return {
        getMyLocation,
        coords
    }
}

export default useCurrentLocationService