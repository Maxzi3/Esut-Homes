import { useState } from "react";
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
    navigate("/lodges");
  };

  return (
    <div className="py-20 px-4 bg-gray-50 text-secondary">
      <form
        className="max-w-3xl bg-white rounded-lg shadow-md mx-auto p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center  underline underline-offset-8">
          Add New Lodge
        </h1>

        {/* Lodge Name */}
        <div>
          <label className="block font-semibold mb-2">Lodge Name</label>
          <input
            type="text"
            name="name"
            value={lodge.name}
            onChange={handleChange}
            placeholder="Enter lodge name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={lodge.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={lodge.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Amenities */}
        <div>
          <label className="block font-semibold mb-2">Amenities</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 5 }, (_, index) => (
              <input
                key={index}
                type="text"
                name={`amenities${index + 1}`}
                placeholder={`Amenity ${index + 1}`}
                value={lodge[`amenities${index + 1}`]}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <label className="block font-semibold mb-2">Contact</label>
          <input
            type="text"
            name="contact"
            value={lodge.contact}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={lodge.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2">Lodge Description</label>
          <textarea
            name="description"
            value={lodge.description}
            onChange={handleChange}
            placeholder="Write your lodge description..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-black h-40 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-secondary transition duration-300"
          >
            Add Lodge
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLodgePage;
