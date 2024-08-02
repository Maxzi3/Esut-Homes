import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddLodgePage = () => {
  const [lodge, setLodge] = useState({
    name: "",
    location: "",
    price: "",
    amenities1: "",
    amenities2: "",
    amenities3: "",
    amenities4: "",
    amenities5: "",
    contact: "",
    email: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLodge((prevLodge) => ({
      ...prevLodge,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // saveLodgeToLocalStorage(lodge);
    navigate("/lodges"); // Navigate to the lodges page
  };

  // const saveLodgeToLocalStorage = (newLodge) => {
  //   // Retrieve existing lodges from localStorage
  //   const existingLodges = JSON.parse(localStorage.getItem("lodges")) || [];
  //   // Add the new lodge to the list
  //   const updatedLodges = [...existingLodges, newLodge];
  //   // Save the updated list back to localStorage
  //   localStorage.setItem("lodges", JSON.stringify(updatedLodges));
  // };

  return (
    <div className="py-20 text-primary">
      <form
        className="container bg-secondary w-10/12 m-auto flex flex-col h-auto p-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center md:text-3xl p-2 text-xl underline font-bold">
          Add Lodge Page
        </h1>

        <label className="text-xl font-semibold p-3 md:mx-28 mx-4">
          Lodge Name
        </label>
        <input
          className="border-none outline-none p-3 w-9/12 mb-4 mx-auto text-black"
          type="text"
          name="name"
          placeholder="Name"
          value={lodge.name}
          onChange={handleChange}
        />

        <label className="text-xl font-semibold p-3 md:mx-28 mx-4">
          Location
        </label>
        <input
          className="border-none outline-none p-3 w-9/12 mb-4 mx-auto text-black"
          type="text"
          name="location"
          placeholder="Location"
          value={lodge.location}
          onChange={handleChange}
        />

        <label className="text-xl font-semibold p-3 md:mx-28 mx-4">Price</label>
        <input
          className="border-none outline-none p-3 w-9/12 mb-4 mx-auto text-black"
          type="text"
          name="price"
          placeholder="Price"
          value={lodge.price}
          onChange={handleChange}
        />

        <label className="text-xl font-semibold p-3 md:mx-32 mx-6">
          Amenities
        </label>
        <ul className=" md:mx-36 mx-8  text-primary flex flex-col items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index}>
              <input
                className="border-none outline-none p-3 md:w-9/12 w-full mb-4 text-black"
                type="text"
                name={`amenities${index + 1}`}
                placeholder={`Amenities${index + 1}`}
                value={lodge[`amenities${index + 1}`]}
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>

        <label className="text-xl font-semibold p-3 md:mx-28 mx-4">
          Contact
        </label>
        <input
          className="border-none outline-none p-3 w-9/12 mb-4 mx-auto text-black"
          type="text"
          name="contact"
          placeholder="Contact"
          value={lodge.contact}
          onChange={handleChange}
        />

        <label className="text-xl font-semibold p-3 md:mx-28 mx-4">Email</label>
        <input
          className="border-none outline-none p-3 w-9/12 mb-4 mx-auto text-black"
          type="email"
          name="email"
          placeholder="Email"
          value={lodge.email}
          onChange={handleChange}
        />

        <label className="text-xl font-semibold p-3">Lodge Description</label>
        <textarea
          className="border-none outline-none p-3 w-full h-40 mb-4 mx-auto text-black"
          name="description"
          placeholder="Write your Description"
          value={lodge.description}
          onChange={handleChange}
        />

        <button
          className="bg-primary hover:bg-secondary w-32 p-2 rounded-full text-secondary hover:text-primary m-auto"
          type="submit"
        >
          Add Lodge
        </button>
      </form>
    </div>
  );
};

export default AddLodgePage;
