export const getAllProperties = async () => {
  const res = await fetch("http://localhost:3000/api/properties");
  if (!res.ok) {
    throw new Error("NO data is fetched");
  }
  const arrayofData = await res.json();
  return await arrayofData.data;
};
export const SearchByLocation = async (country: string) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      location: country,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/search", options);

  if (!res.ok) {
    throw new Error("NO data is fetched");
  }
  const arrayofData = await res.json();
  return await arrayofData.data;
};
export const SearchByID = async (pid: string) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      id: pid,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/description", options);
  if (!res.ok) {
    throw new Error("NO data is fetched");
  }
  const arrayofData = await res.json();
  return await arrayofData.data;
};

export const SignUpFunction = async (params: object) => {

  const options = {
    method: "POST",
    body: JSON.stringify(params), // Pass the params directly without wrapping in another object
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/signup", options);
  if (!res.ok) {
    throw new Error("No data is fetched");
  }
  const response = await res.json();
  return response.data; // No need to use 'await' here, as 'response.data' is not a promise
};

export const LogInFunction = async ( params : object) =>{
  const options = {
    method: "POST",
    body: JSON.stringify(params), 
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/login", options);
  if (!res.ok) {
    throw new Error("No data is fetched");
  }
  const response = await res.json();
  return response.data;
}
