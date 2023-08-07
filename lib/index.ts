export interface PropertyInterface {
  id: string;
  name: string;
  location: string;
  country: string;
  description: string;
  option: string;
  category: string;
  price: number;
  images?: {
    thumbnail?: string;
    banner?: string;
    banner2?: string;
  };
  liked: boolean;
  specifications: {
    room: number;
    bathRoom: number;
    area: number;
    condition: boolean;
  };
  createdBy: string;
}
const Locations = {
  Lahore: [
    "Gulberg",
    "DHA",
    "Sabzazar",
    "Johar Town",
    "PIA Road",
    "Anarkali",
    "Walled City",
    "Iqbal Town",
  ],

  Rawalpindi: ["Saddar", "Bahria Town", "Satellite Town"],

  Gujranwala: ["Satellite Town", "Fizaiya Housing Society", "Cantt"],

  Islamabad: [
    "Bahria Town",
    "Sector",
    "New Town",
    "True Town",
    "Bahria Town",
    "Sabzazar",
  ],
};
