import React from 'react'
import LodgesList from '../Components/LodgesList'

const LodgesPage = () => {
  return (
    <div>
      <LodgesList
        isHome={false}
        title="Our Lodges"
        subtitle="Explore All Options"
      />
    </div>
  );
}

export default LodgesPage