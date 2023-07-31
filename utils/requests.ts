import { useRouter } from "next/navigation";
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
  console.log(arrayofData);
  return await arrayofData.data;
};
export const SignUpFunction = async (params: object) => {
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/signup", options);
  if (!res.ok) {
    if (!res.ok) {
      return "no";
    }
  }
  const response = await res.json();
  return response.data;
};

export const LogInFunction = async (params: object) => {
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/login", options);
  if (!res.ok) {
    return "no";
  }
  const response = await res.json();
  console.log(response);
  localStorage.setItem("token", response.token);
  return response.data;
};
export const SearchByRange = async (priceRange: number) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      range: priceRange,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/range", options);
  if (!res.ok) {
    throw new Error("NO data is fetched");
  }
  const arrayofData = await res.json();

  return await arrayofData.data;
};
export const SearchByCategory = async (searchedCategory: string) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      category: searchedCategory,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/category", options);

  if (!res.ok) {
    throw new Error("NO data is fetched");
  }
  const arrayofData = await res.json();
  return await arrayofData.data;
};
export const createProperrtyFunction = async (formValues: object) => {
  const options = {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/createProperty", options);
  if (!res.ok) {
    throw new Error("Error while creating the property. Please try Again");
  }
  const arrayofData = await res.json();
  return await arrayofData.data;
};
export const SearchUser = async (email: string) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      createdBy: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  };
  const res = await fetch("http://localhost:3000/api/searchUser", options);
  if (!res.ok) {
    throw new Error("NO data is fetched");
  }
  const arrayofData = await res.json();
  return await arrayofData.data;
};
