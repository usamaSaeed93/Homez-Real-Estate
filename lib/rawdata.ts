 export interface PropertyInterface{
    id:string
    name:string
    location:string
    country:string
    specifications:specifications
  
}


interface specifications{
    room:number
    bathRoom:number
    area:number
    condition:boolean
}

