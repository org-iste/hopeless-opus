import React from 'react';

export const Card = ({ 
  children, 
  className = '',
  ...props
}) => {
  const baseClasses = 'bg-dark-navy border border-navy rounded-lg shadow-lg';
  
  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ 
  children, 
  className = '',
  ...props
}) => {
  const baseClasses = 'px-6 py-4 border-b border-navy';
  
  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ 
  children, 
  className = '',
  ...props
}) => {
  const baseClasses = 'text-xl font-semibold text-turquoise';
  
  const classes = `${baseClasses} ${className}`;

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  );
};

export const CardContent = ({ 
  children, 
  className = '',
  ...props
}) => {
  const baseClasses = 'px-6 py-4';
  
  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
