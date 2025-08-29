import React from 'react';

export const Label = ({ 
  children, 
  htmlFor = '', 
  className = '',
  ...props
}) => {
  const baseClasses = 'block text-sm font-medium text-turquoise mb-2';
  
  const classes = `${baseClasses} ${className}`;

  return (
    <label
      htmlFor={htmlFor}
      className={classes}
      {...props}
    >
      {children}
    </label>
  );
};
