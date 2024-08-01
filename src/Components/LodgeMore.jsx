import React from 'react'

const LodgeMore = ({Lodge, index}) => {
  return (
    <div className="p-4 border md:w-11/12 mx-auto bg-secondary rounded-md">
      <img
        src="https://dummyimage.com/721x401"
        alt={Lodge.name}
        className="w-full h-96 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary mb-2">{Lodge.name}</h3>
        <p className="text-primary mb-2">{Lodge.location}</p>
        <p className="text-primary mb-2">{Lodge.price}</p>
        <ul className="list-disc pl-4 text-primary">
          <li>{Lodge.amenities[0]}</li>
          <li>{Lodge.amenities[1]}</li>
          <li>{Lodge.amenities[2]}</li>
          <li>{Lodge.amenities[3]}</li>
          <li>{Lodge.amenities[4]}</li>
        </ul>
        <p className="text-primary mt-2">{Lodge.description}</p>
        <p className="text-primary mt-2">
          Contact: {Lodge.contact.phone}, {Lodge.contact.email}
        </p>
      </div>
    </div>
  );
}

export default LodgeMore