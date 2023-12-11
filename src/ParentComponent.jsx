import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = 'Hello from parent!';
  return <ChildComponent data={data} />;
};
  
export default ParentComponent;