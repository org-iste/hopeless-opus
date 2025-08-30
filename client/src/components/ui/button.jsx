import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  className = '', 
  disabled = false,
  variant = 'default'
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-navy text-white hover:bg-dark-navy focus:ring-navy',
    primary: 'bg-turquoise text-dark-navy hover:bg-opacity-90 focus:ring-turquoise',
    secondary: 'bg-plum text-white hover:bg-opacity-90 focus:ring-plum',
    danger: 'bg-red text-white hover:bg-opacity-90 focus:ring-red',
    ghost: 'bg-transparent text-navy hover:bg-navy hover:text-white focus:ring-navy'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
