import React from 'react'
import { Link } from 'react-router-dom';

const LoadMore = () => {
  return (
    <div>
      <Link
        to="/Testimonial"
        className="text-primary hover:text-secondary bg-secondary hover:bg-primary  block m-auto  w-32 pl-5 py-3 rounded-full"
        href="http://"
      >
        Load more
      </Link>
    </div>
  );
}

export default LoadMore
