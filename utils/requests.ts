
export const getAllProperties = async ()=>{
        const res =await fetch("http://localhost:3000/api/properties")
    if(!res.ok){
throw new Error("NO data is fetched");
    }
const arrayofData = await res.json();
return await arrayofData.data;
}
export const SearchByLocation = async (country:string)=>{
    const options={
      method:"POST",
      body: JSON.stringify({
        location:country
      }),
      headers: {
        "content-type": "application/json",
      },
    }
    const res =await fetch("http://localhost:3000/api/search",options)

if(!res.ok){
throw new Error("NO data is fetched");
}
const arrayofData = await res.json();
return await arrayofData.data;
}
export const SearchByID = async (pid:string)=>{

  const options={
    method:"POST",
    body: JSON.stringify({
      id:pid
    }),
    headers: {
      "content-type": "application/json",
    },
  }
  const res =await fetch("http://localhost:3000/api/description",options)
if(!res.ok){
throw new Error("NO data is fetched");
}
const arrayofData = await res.json();
return await arrayofData.data;
}
