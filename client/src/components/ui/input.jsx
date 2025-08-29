import React from 'react';

export const Input = ({ 
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'w-full px-3 py-2 border border-navy rounded-md bg-dark-navy text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent transition-all duration-200';
  
  const classes = `${baseClasses} ${className}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes}
      disabled={disabled}
      {...props}
    />
  );
};
