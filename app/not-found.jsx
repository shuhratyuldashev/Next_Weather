import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="Not-found">
      <h1>404</h1>
      <p>
        Page not Found. Please <br />back to 
        <Link className='Link' href="/"> home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
