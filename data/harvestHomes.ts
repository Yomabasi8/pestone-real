// All figures are taken from the client's Harvest Homes flyers (public/Images/harvest-homes).

export const HARVEST_LOCATION = "Laloko Village, by Siun, Owode Obafemi, Ogun State";
export const HARVEST_PHONES = [
  { display: "+234 816 676 5373", tel: "+2348166765373" },
  { display: "+234 913 042 6840", tel: "+2349130426840" },
];
export const TITLE_DOCUMENTS = ["Freehold", "Deed of Assignment", "Survey"];
export const PRICE_PER_BUNCH = 5000;

export interface HarvestPlan {
  name: string;
  price: string;
  unit: string;
  blurb: string;
  schedule: [string, string][];
  perks: string[];
  featured: boolean;
}

export const plans: HarvestPlan[] = [
  {
    name: "Bare Land",
    price: "₦3,000,000",
    unit: "per acre",
    blurb: "Secure freehold farmland in one of Ogun State's fastest-growing industrial corridors.",
    schedule: [
      ["Initial deposit", "₦1,500,000"],
      ["1st month", "₦500,000"],
      ["2nd month", "₦500,000"],
      ["3rd month", "₦500,000"],
    ],
    perks: ["Freehold land", "Deed of Assignment", "Survey plan"],
    featured: false,
  },
  {
    name: "Plantain Plantation",
    price: "₦4,500,000",
    unit: "per acre",
    blurb: "Own the land and earn from it. We plant and manage the farm while you share in every harvest.",
    schedule: [
      ["Initial deposit", "₦1,500,000"],
      ["1st month", "₦1,000,000"],
      ["2nd month", "₦1,000,000"],
      ["3rd month", "₦1,000,000"],
    ],
    perks: [
      "300 plantain suckers per acre",
      "5 years of farm management",
      "70% of annual profit goes to you",
      "Also available at ₦12M per hectare (₦3M deposit)",
    ],
    featured: true,
  },
];

export interface PlotSize {
  label: string;
  price: number;
  suckers: number;
}

export const plotSizes: PlotSize[] = [
  { label: "1 Acre", price: 4_500_000, suckers: 300 },
  { label: "5 Acres", price: 22_500_000, suckers: 1_500 },
  { label: "10 Acres", price: 45_000_000, suckers: 3_000 },
  { label: "1 Hectare", price: 12_000_000, suckers: 1_000 },
  { label: "3 Hectares", price: 36_000_000, suckers: 3_000 },
  { label: "5 Hectares", price: 60_000_000, suckers: 5_000 },
];

export const neighbours = [
  { name: "Nestlé Flowergate", type: "Food & beverage factory" },
  { name: "International Breweries", type: "Brewery" },
  { name: "Coleman Wires", type: "Cable manufacturing" },
  { name: "Gateway International Airport", type: "Airport" },
];

export const flyers = [
  { src: "/Images/harvest-homes/flyer-introducing.jpg", width: 864, height: 1080, alt: "Introducing Harvest Homes farmland at Laloko Village, Owode Obafemi, Ogun State" },
  { src: "/Images/harvest-homes/flyer-own-your-farmland.jpg", width: 1024, height: 1280, alt: "Harvest Homes bare land and plantain plantation payment plans" },
  { src: "/Images/harvest-homes/flyer-harvest-estimate.jpg", width: 864, height: 1080, alt: "Harvest Homes plantain harvest estimate per acre" },
  { src: "/Images/harvest-homes/flyer-flexible-payment.jpg", width: 864, height: 1080, alt: "Harvest Homes flexible payment, start with ₦1,000,000" },
  { src: "/Images/harvest-homes/flyer-price-list.jpg", width: 864, height: 1080, alt: "Harvest Homes plantain plantation land price list and harvest estimate" },
  { src: "/Images/harvest-homes/flyer-location.jpg", width: 864, height: 1080, alt: "Harvest Homes location near Nestlé Flowergate, International Breweries and Gateway Airport" },
  { src: "/Images/harvest-homes/flyer-site-inspection.jpg", width: 864, height: 1080, alt: "Harvest Homes site inspection with Ajah and Berger pickup" },
];

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-US")}`;
}
