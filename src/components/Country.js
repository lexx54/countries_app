import React from 'react';

const Country = ({countries})=> {
  const {name}=countries;
  return (<p>{name}</p>)
}

export default Country;