
export interface IFacilitateForRent {
  id?: string;
  type?: "room" | "house" | "parking"; // etc. you can add
  mapData?: google.maps.LatLng | google.maps.LatLngLiteral;
  pricePerMonth?: number;
  paymentDueDate?: 'per month' | 'per half month'
  title?: string;
  description?: string;
  images?: string[]; // ;ink of images
  thumbnail?: string; // from images
  coordinateDetails?: string; // Like the street name and city where coordinate located.
}

export interface IFakeFacilitiesTypes {
  id: string;
  type: "room" | "house" | "parking";
  icon: React.ReactNode;
}

export const FakeFacilities: IFacilitateForRent[] = [
  {
    id: "1",
    type: "room",
    mapData: {
      lat: 13.4146,
      lng: 122.523,
    },
    pricePerMonth: 1500,
    title: "Cozy Room in Manila",
    description:
      "A comfortable room in the heart of Manila. Close to amenities and public transport.",
    images: ["room1.jpg", "room2.jpg", "room3.jpg"],
    thumbnail: "room1.jpg",
    coordinateDetails: "Manila, Philippines",
  },
  {
    id: "2",
    type: "house",
    mapData: {
      lat: 14.5902,
      lng: 120.9776,
    },
    pricePerMonth: 3500,
    title: "Spacious House in Quezon City",
    description:
      "A spacious house with a beautiful garden in Quezon City. Perfect for a family.",
    images: ["house1.jpg", "house2.jpg", "house3.jpg"],
    thumbnail: "house1.jpg",
    coordinateDetails: "Quezon City, Philippines",
  },
  {
    id: "3",
    type: "room",
    mapData: {
      lat: 10.3,
      lng: 123.9,
    },
    pricePerMonth: 1200,
    title: "Affordable Room in Cebu",
    description:
      "An affordable room for rent in Cebu. Close to the beach and city center.",
    images: ["room4.jpg", "room5.jpg", "room6.jpg"],
    thumbnail: "room4.jpg",
    coordinateDetails: "Cebu, Philippines",
  },
  {
    id: "4",
    type: "parking",
    mapData: {
      lat: 14.0834,
      lng: 121.0178,
    },
    pricePerMonth: 200,
    title: "Secure Parking in Makati",
    description:
      "A secure parking space in the business district of Makati. 24/7 security.",
    images: ["parking1.jpg"],
    thumbnail: "parking1.jpg",
    coordinateDetails: "Makati, Philippines",
  },
  {
    id: "5",
    type: "house",
    mapData: {
      lat: 13.6372,
      lng: 123.1796,
    },
    pricePerMonth: 2800,
    title: "Luxurious Villa in Batangas",
    description:
      "A luxurious villa with a private pool in Batangas. Ideal for a weekend getaway.",
    images: ["villa1.jpg", "villa2.jpg", "villa3.jpg"],
    thumbnail: "villa1.jpg",
    coordinateDetails: "Batangas, Philippines",
  },
  {
    id: "6",
    type: "room",
    mapData: {
      lat: 10.3157,
      lng: 123.8854,
    },
    pricePerMonth: 1100,
    title: "Downtown Room in Cebu City",
    description:
      "A cozy room in the heart of Cebu City. Close to shopping and dining options.",
    images: ["room7.jpg", "room8.jpg", "room9.jpg"],
    thumbnail: "room7.jpg",
    coordinateDetails: "Cebu City, Philippines",
  },
  {
    id: "7",
    type: "house",
    mapData: {
      lat: 14.5902,
      lng: 120.9776,
    },
    pricePerMonth: 3500,
    title: "Spacious House in Quezon City",
    description:
      "A spacious house with a beautiful garden in Quezon City. Perfect for a family.",
    images: ["house4.jpg", "house5.jpg", "house6.jpg"],
    thumbnail: "house4.jpg",
    coordinateDetails: "Quezon City, Philippines",
  },
  {
    id: "8",
    type: "room",
    mapData: {
      lat: 10.3,
      lng: 123.9,
    },
    pricePerMonth: 1200,
    title: "Affordable Room in Cebu",
    description:
      "An affordable room for rent in Cebu. Close to the beach and city center.",
    images: ["room4.jpg", "room5.jpg", "room6.jpg"],
    thumbnail: "room4.jpg",
    coordinateDetails: "Cebu, Philippines",
  },
  {
    id: "9",
    type: "parking",
    mapData: {
      lat: 14.0834,
      lng: 121.0178,
    },
    pricePerMonth: 200,
    title: "Secure Parking in Makati",
    description:
      "A secure parking space in the business district of Makati. 24/7 security.",
    images: ["parking1.jpg"],
    thumbnail: "parking1.jpg",
    coordinateDetails: "Makati, Philippines",
  },
  {
    id: "10",
    type: "house",
    mapData: {
      lat: 13.6372,
      lng: 123.1796,
    },
    pricePerMonth: 2800,
    title: "Luxurious Villa in Batangas",
    description:
      "A luxurious villa with a private pool in Batangas. Ideal for a weekend getaway.",
    images: ["villa1.jpg", "villa2.jpg", "villa3.jpg"],
    thumbnail: "villa1.jpg",
    coordinateDetails: "Batangas, Philippines",
  },
  {
    id: "11",
    type: "room",
    mapData: {
      lat: 14.6349,
      lng: 121.0685,
    },
    pricePerMonth: 1250,
    title: "City Center Room in Quezon City",
    description:
      "A room in the heart of Quezon City, close to malls, restaurants, and transportation.",
    images: ["room10.jpg", "room11.jpg", "room12.jpg"],
    thumbnail: "room10.jpg",
    coordinateDetails: "Quezon City, Philippines",
  },
  {
    id: "12",
    type: "house",
    mapData: {
      lat: 10.6407,
      lng: 122.9687,
    },
    pricePerMonth: 3300,
    title: "Seaside House in Iloilo",
    description:
      "A picturesque seaside house in Iloilo, perfect for a serene getaway.",
    images: ["iloilo1.jpg", "iloilo2.jpg", "iloilo3.jpg"],
    thumbnail: "iloilo1.jpg",
    coordinateDetails: "Iloilo, Philippines",
  },
  {
    id: "13",
    type: "room",
    mapData: {
      lat: 10.6869,
      lng: 122.9536,
    },
    pricePerMonth: 1150,
    title: "Budget Room in Bacolod",
    description:
      "A budget-friendly room in Bacolod City. Ideal for students and working professionals.",
    images: ["bacolod1.jpg", "bacolod2.jpg", "bacolod3.jpg"],
    thumbnail: "bacolod1.jpg",
    coordinateDetails: "Bacolod, Philippines",
  },
  {
    id: "14",
    type: "parking",
    mapData: {
      lat: 14.676,
      lng: 121.0437,
    },
    pricePerMonth: 190,
    title: "Secure Parking in Pasig",
    description:
      "Secure parking space in the bustling city of Pasig. 24/7 surveillance.",
    images: ["pasig1.jpg"],
    thumbnail: "pasig1.jpg",
    coordinateDetails: "Pasig, Philippines",
  },
  {
    id: "15",
    type: "house",
    mapData: {
      lat: 14.0654,
      lng: 120.7349,
    },
    pricePerMonth: 2700,
    title: "Beachfront House in Zambales",
    description:
      "Beachfront house in Zambales with stunning sea views. Perfect for beach lovers.",
    images: ["zambales1.jpg", "zambales2.jpg", "zambales3.jpg"],
    thumbnail: "zambales1.jpg",
    coordinateDetails: "Zambales, Philippines",
  },
  {
    id: "16",
    type: "room",
    mapData: {
      lat: 10.3173,
      lng: 123.9053,
    },
    pricePerMonth: 1400,
    title: "Downtown Room in Cebu City",
    description:
      "A comfortable room in downtown Cebu City. Walking distance to shopping and dining.",
    images: ["room13.jpg", "room14.jpg", "room15.jpg"],
    thumbnail: "room13.jpg",
    coordinateDetails: "Cebu City, Philippines",
  },
  {
    id: "17",
    type: "house",
    mapData: {
      lat: 14.422,
      lng: 120.9399,
    },
    pricePerMonth: 3100,
    title: "Spacious House in Subic Bay",
    description:
      "A spacious house in Subic Bay with a large backyard. Ideal for families.",
    images: ["subic1.jpg", "subic2.jpg", "subic3.jpg"],
    thumbnail: "subic1.jpg",
    coordinateDetails: "Subic Bay, Philippines",
  },
  {
    id: "18",
    type: "room",
    mapData: {
      lat: 10.726,
      lng: 122.5618,
    },
    pricePerMonth: 1200,
    title: "Cozy Room in Iloilo City",
    description:
      "A cozy room in the heart of Iloilo City. Close to restaurants and public transport.",
    images: ["iloilo4.jpg", "iloilo5.jpg", "iloilo6.jpg"],
    thumbnail: "iloilo4.jpg",
    coordinateDetails: "Iloilo City, Philippines",
  },
  {
    id: "19",
    type: "parking",
    mapData: {
      lat: 13.4687,
      lng: 122.6136,
    },
    pricePerMonth: 210,
    title: "Secure Parking in Legazpi",
    description:
      "Secure parking space in Legazpi City, near commercial areas and government offices.",
    images: ["legazpi1.jpg"],
    thumbnail: "legazpi1.jpg",
    coordinateDetails: "Legazpi, Philippines",
  },
  {
    id: "20",
    type: "house",
    mapData: {
      lat: 10.3266,
      lng: 123.9273,
    },
    pricePerMonth: 2900,
    title: "Modern House in Mandaue City",
    description:
      "A modern house with a contemporary design in Mandaue City. Ideal for urban living.",
    images: ["mandaue1.jpg", "mandaue2.jpg", "mandaue3.jpg"],
    thumbnail: "mandaue1.jpg",
    coordinateDetails: "Mandaue City, Philippines",
  },
];

export const FakeFacilitiesThumbnail = [
  "https://picsum.photos/200/300/?image=1",
  "https://picsum.photos/200/300/?image=2",
  "https://picsum.photos/200/300/?image=3",
  "https://picsum.photos/200/300/?image=4",
  "https://picsum.photos/200/300/?image=5",
  "https://picsum.photos/200/300/?image=6",
  "https://picsum.photos/200/300/?image=7",
  "https://picsum.photos/200/300/?image=8",
  "https://picsum.photos/200/300/?image=9",
  "https://picsum.photos/200/300/?image=10",
  "https://picsum.photos/200/300/?image=11",
  "https://picsum.photos/200/300/?image=12",
  "https://picsum.photos/200/300/?image=13",
  "https://picsum.photos/200/300/?image=14",
  "https://picsum.photos/200/300/?image=15",
  "https://picsum.photos/200/300/?image=16",
  "https://picsum.photos/200/300/?image=17",
  "https://picsum.photos/200/300/?image=18",
  "https://picsum.photos/200/300/?image=19",
  "https://picsum.photos/200/300/?image=20",
];

// export const FakeFacilitiesTypes: IFakeFacilitiesTypes[] = [
//   {
//     id: "1asdas",
//     type: "room",
//     icon: <MdBedroomChild size={40} />,
//   },
//   {
//     id: "2asdas",
//     type: "house",
//     icon: <MdHouseSiding size={40} />,
//   },
//   {
//     id: "3asdas",
//     type: "parking",
//     icon: <MdOutlineLocalParking size={40} />,
//   },
// ];
