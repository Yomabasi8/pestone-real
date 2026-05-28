export interface Property {
  id: string;
  status: "Selling" | "Renting";
  title: string;
  shortDescription: string;
  location: string;
  price: string;
  fullPrice: string;
  images: string[];
  longDescription: string;
  documents: string[];
  features: string[];
}

export const properties: Property[] = [
  {
    id: "semi-detached-duplex",
    status: "Selling",
    title: "Semi-Detached Duplex",
    shortDescription: "4 Bedrooms Semi-Detached Duplex with Bq",
    location: "Orchid, 2nd Toll Lekki, Lagos",
    price: "₦ 280M",
    fullPrice: "₦280,000,000",
    images: [
      "/Images/semi-detached.png",
      "/Images/semi-detached-2.jpg",
      "/Images/semi-detached-3.jpg",
      "/Images/semi-detached-4.jpg",
      "/Images/semi-detached-5.jpg",
    ],
    longDescription:
      "Experience modern living in this spacious 4-bedroom semi-detached duplex designed for comfort, style, and functionality. The property features well-ventilated rooms, contemporary finishes, and a boys' quarters (BQ), making it ideal for families seeking a premium residential experience.\n\nThe property comes with complete and verified documentation, including:",
    documents: [
      "Certificate of Occupancy (C of O)",
      "Building Approval",
      "Drainage Clearance Approval",
    ],
    features: [
      "Oven",
      "Video Bell",
      "Microwave",
      "Jacuzzi",
      "POP Ceiling",
      "CCTV",
      "Water Heater",
      "Fully Fitted Kitchen",
      "Brand New",
      "Serenity",
      "Secured Estate",
      "Good Compound Space",
    ],
  },
  {
    id: "terrace-duplex",
    status: "Selling",
    title: "4 Bedroom Terrace Duplex",
    shortDescription: "4 Bedroom terrace duplex (spacious) + BQ",
    location: "Lekki Phase One, Lagos",
    price: "₦ 450M",
    fullPrice: "₦450,000,000",
    images: [
      "/Images/terrace-duplex.jpg",
      "/Images/terrace-2.jpg",
      "/Images/terrace-3.jpg",
      "/Images/terrace-4.jpg",
      "/Images/terrace-5.jpg",
    ],
    longDescription:
      "A stunning 4-bedroom terrace duplex with spacious living areas and a boys' quarters. Situated in the heart of Lekki Phase One, this property offers an exceptional blend of luxury and convenience for discerning buyers.\n\nThe property comes with complete and verified documentation, including:",
    documents: [
      "Certificate of Occupancy (C of O)",
      "Building Approval",
      "Survey Plan",
    ],
    features: [
      "Spacious Rooms",
      "Boys Quarters",
      "Fitted Kitchen",
      "POP Ceiling",
      "CCTV",
      "Secured Estate",
      "Ample Parking",
      "Generator",
      "Brand New",
    ],
  },
  {
    id: "five-bedroom-duplex",
    status: "Selling",
    title: "5 Bedroom Detached Duplex",
    shortDescription: "5 Bedroom Fully Detached Duplex",
    location: "Ikota Lekki, Lagos",
    price: "₦ 300M",
    fullPrice: "₦300,000,000",
    images: [
      "/Images/five-bed-duplex.jpg",
      "/Images/five-duplex-2.jpg",
      "/Images/five-duplex-3.jpg",
      "/Images/five-duplex-4.jpg",
      "/Images/five-duplex-5.jpg",
      "/Images/five-duplex-6.jpg",
    ],
    longDescription:
      "A magnificent 5-bedroom fully detached duplex in the prestigious Ikota area of Lekki. This property combines grand architecture with thoughtful interior design, offering ample space for large families and those who appreciate premium living.\n\nThe property comes with complete and verified documentation, including:",
    documents: [
      "Certificate of Occupancy (C of O)",
      "Building Approval",
      "Drainage Clearance Approval",
    ],
    features: [
      "5 Bedrooms",
      "Fully Detached",
      "Swimming Pool",
      "Jacuzzi",
      "CCTV",
      "Fitted Kitchen",
      "Boys Quarters",
      "Water Heater",
      "POP Ceiling",
      "Secured Estate",
      "Generator",
      "Good Compound Space",
    ],
  },
  {
    id: "luxury-apartment",
    status: "Selling",
    title: "Luxury 2 Bedroom Apartment",
    shortDescription: "Luxury 2 Bedroom Serviced Apartment",
    location: "Lekki Phase One, Lagos",
    price: "₦ 390M",
    fullPrice: "₦390,000,000",
    images: [
      "/Images/luxury-apartment.jpg",
      "/Images/luxury-apartment-2.jpg",
      "/Images/luxury-apartment-3.jpg",
      "/Images/luxury-apartment-4.jpg",
      "/Images/luxury-apartment-5.jpg",
      "/Images/luxury-apartment-6.jpg",
    ],
    longDescription:
      "An exquisite 2-bedroom luxury serviced apartment offering a premium urban lifestyle in the heart of Lekki Phase One. This fully serviced residence features high-end finishes, modern appliances, and 24/7 concierge services.\n\nThe property comes with complete and verified documentation, including:",
    documents: [
      "Certificate of Occupancy (C of O)",
      "Building Approval",
      "Deed of Assignment",
    ],
    features: [
      "Serviced Apartment",
      "24/7 Concierge",
      "Swimming Pool",
      "Gym",
      "CCTV",
      "Fitted Kitchen",
      "Water Heater",
      "POP Ceiling",
      "Generator",
      "Brand New",
      "Secured Building",
      "Elevator",
    ],
  },
];
