interface PropertyInterface {
  id: string;
  name: string;
  location: string;
  country: string;
  description:string;
  option:string;
  category:string;
  price:number;
  images?:{
    thumbnail?:string; 
    banner?:string;
    banner2?:string
  },
liked:boolean,
  specifications: {
    room: number;
    bathRoom: number;
    area: number;
    condition: boolean;
  };
  createdBy:string;
}



