export const getAllProperties = async ()=>{
        const res =await fetch("http://localhost:3000/api/properties")
    if(!res.ok){
throw new Error("NO data is fetched");
    }
const arrayofData = await res.json();
return await arrayofData.data;
}
