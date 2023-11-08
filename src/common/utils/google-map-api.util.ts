import { IFacilitateForRent } from "@/data/mocks/facilitate";

export const fetchLatLngInfos = (coordinates: any[]) => {
  return coordinates.map((coordinate) => {
    const { lat, lng } = coordinate;
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY}`;

    return fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          const result = data.results[0];
          const city = result.address_components.find((component: any) =>
            component.types.includes("locality")
          );
          return city ? city.long_name : "City not found";
        } else {
          return "Geocoding request failed";
        }
      })
      .catch((error) => {
        return "Error: " + error;
      });
  });
};

export function getNearbyProperties(
  properties: IFacilitateForRent[],
  targetLocation: google.maps.LatLng | google.maps.LatLngLiteral,
  maxDistance: number
): IFacilitateForRent[] {
  const filteredPlaces = properties.filter((place) => {
    const R = 6371; // Earth's radius in kilometers

    const lat1 = targetLocation?.lat as number;
    const lon1 = targetLocation?.lng as number;
    const lat2 = place.mapData?.lat as number;
    const lon2 = place.mapData?.lng as number;

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance <= maxDistance;
  });

  return filteredPlaces;
}
