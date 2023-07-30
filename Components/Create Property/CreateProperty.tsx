"use state";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { createProperrtyFunction } from "@/utils/requests";
import { useEffect } from "react";
export interface PropertyInterface {
  id: string;
  name: string;
  location: string;
  country: string;
  description: string;
  option: string;
  category: string;
  price: number;
  specifications: {
    room: number;
    bathRoom: number;
    area: number;
    condition: boolean;
  };
}

const PropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<PropertyInterface>({
    id: "",
    name: "",
    location: "",
    country: "",
    description: "",
    option: "",
    category: "",
    price: 0,
    specifications: {
      room: 0,
      bathRoom: 0,
      area: 0,
      condition: false,
    },
  });
const [created,setcreated]=useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const func = async () => {
      const data = await createProperrtyFunction(formData);
      if(data){
          setcreated(data);
          setTimeout(() => {
           setcreated(false)
            }, 10000);
      }

    };
    func();
    setFormData({
      id: "",
      name: "",
      location: "",
      country: "",
      description: "",
      option: "",
      category: "",
      price: 0,
      specifications: {
        room: 0,
        bathRoom: 0,
        area: 0,
        condition: false,
      },
    });
  };

  return (
    <form
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      onSubmit={handleSubmit}
    >

      <h2 className="text-2xl font-bold text-center mb-6">Create Property</h2>
      {
        created?<Alert severity="success">This is a success alert — check it out!</Alert> : ""

      }
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-medium">
          ID
        </label>
        <button
          id="id"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.id}
          onClick={() =>
            setFormData({
              ...formData,
              id: Math.floor(Math.random() * 10000).toString(),
            })
          }
        >
          Generate ID
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-medium">
          Location
        </label>
        <input
          type="text"
          id="location"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-medium">
          Country
        </label>
        <input
          type="text"
          id="country"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium"
        >
          Description
        </label>
        <textarea
          id="description"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="option" className="block text-gray-700 font-medium">
          Option
        </label>
        <input
          type="text"
          id="option"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.option}
          onChange={(e) => setFormData({ ...formData, option: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-medium">
          Category
        </label>
        <input
          type="text"
          id="category"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium">
          Price
        </label>
        <input
          type="number"
          id="price"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: Number(e.target.value) })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="room" className="block text-gray-700 font-medium">
          Room
        </label>
        <input
          type="number"
          id="room"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.specifications.room}
          onChange={(e) =>
            setFormData({
              ...formData,
              specifications: {
                ...formData.specifications,
                room: Number(e.target.value),
              },
            })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="bathRoom" className="block text-gray-700 font-medium">
          Bathroom
        </label>
        <input
          type="number"
          id="bathRoom"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.specifications.bathRoom}
          onChange={(e) =>
            setFormData({
              ...formData,
              specifications: {
                ...formData.specifications,
                bathRoom: Number(e.target.value),
              },
            })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="area" className="block text-gray-700 font-medium">
          Area
        </label>
        <input
          type="number"
          id="area"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.specifications.area}
          onChange={(e) =>
            setFormData({
              ...formData,
              specifications: {
                ...formData.specifications,
                area: Number(e.target.value),
              },
            })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="condition" className="block text-gray-700 font-medium">
          Condition
        </label>
        <input
          type="checkbox"
          id="condition"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          checked={formData.specifications.condition}
          onChange={(e) =>
            setFormData({
              ...formData,
              specifications: {
                ...formData.specifications,
                condition: e.target.checked,
              },
            })
          }
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-6 px-8 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          onClick={() =>
            setFormData({
              ...formData,
              id: Math.floor(Math.random() * 10000).toString(),
            })
          }
        >
          Create Property
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;
