"use client";
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
interface DesINterface {
  data: PropertyInterface;
}
const UpdateData: React.FC<DesINterface> = ({ data }) => {
  const {
    name,
    location,
    country,
    specifications,
    description,
    category,
    price,
  } = data;
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
  const [created, setcreated] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const func = async () => {
      const data = await createProperrtyFunction(formData);
      if (data) {
        setcreated(data);
        setTimeout(() => {
          setcreated(false);
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
      {created ? (
        <Alert severity="success">Property Created. Congratulations !</Alert>
      ) : (
        ""
      )}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium">
          Name
        </label>
        <p className="text-blue-700 text-center font-bold">{name}</p>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter Updated Value"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 font-medium">
          Location
        </label>
        <p className="text-blue-700 text-center font-bold">{location}</p>
        <input
          type="text"
          id="location"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.location}
          placeholder="Enter Updated Value"
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-medium">
          Country
        </label>
        <p className="text-blue-700 text-center font-bold">{country}</p>
        <input
          type="text"
          id="country"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.country}
          placeholder="Enter Updated Value"
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
        <p className="text-blue-700 text-center font-light ">{description}</p>
        <textarea
          id="description"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.description}
          placeholder="Enter Updated Value"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="option" className="block text-gray-700 font-medium">
          Option
        </label>
        <p className="text-blue-700 text-center font-bold">{}</p>
        <input
          type="text"
          id="option"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.option}
          placeholder="Enter Updated Value"
          onChange={(e) => setFormData({ ...formData, option: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-medium">
          Category
        </label>
        <p className="text-blue-700 text-center font-bold">{category}</p>
        <input
          type="text"
          id="category"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.category}
          placeholder="Enter Updated Value"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium">
          Price
        </label>
        <p className="text-blue-700 text-center font-bold">{price}</p>
        <input
          type="number"
          id="price"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.price}
          placeholder="Enter Updated Value"
          onChange={(e) =>
            setFormData({ ...formData, price: Number(e.target.value) })
          }
        />
      </div>

      <div className="mb-4">
        <label htmlFor="room" className="block text-gray-700 font-medium">
          Room
        </label>
        <p className="text-blue-700 text-center font-bold">
          {specifications.room}
        </p>
        <input
          type="number"
          id="room"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.specifications.room}
          placeholder="Enter Updated Value"
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
        <p className="text-blue-700 text-center font-bold">
          {specifications.bathRoom}
        </p>
        <input
          type="number"
          id="bathRoom"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.specifications.bathRoom}
          placeholder="Enter Updated Value"
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
        <p className="text-blue-700 text-center font-bold">
          {specifications.area}
        </p>
        <input
          type="number"
          id="area"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          value={formData.specifications.area}
          placeholder="Enter Updated Value"
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

      {/* <div className="mb-4">
        <label htmlFor="condition" className="block text-gray-700 font-medium">
          Condition
        </label>
        <p className="text-blue-700 text-center font-bold">
          {condition ? "New" : "Old"}
        </p>
        <input
          type="checkbox"
          id="condition"
          className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
          checked={formData.specifications.condition}
          placeholder="Enter Updated Value"
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
      </div> */}

      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-6 px-8 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Create Property
        </button>
      </div>
    </form>
  );
};

export default UpdateData;
