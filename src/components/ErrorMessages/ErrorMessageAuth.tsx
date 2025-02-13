import React from "react";

interface ErrorMessageAuthProps {
  message: string;
  className?: string;
}

export const ErrorMessageAuth: React.FC<ErrorMessageAuthProps> = ({ message, className = "" }) => {
  return (
    <div className='error-message-wrapper'>
      <p className={`text-start text-danger mb-3 bg-light bg-opacity-50 px-3 py-1 rounded mt-2 ${className}`}>{message}</p>
    </div>
  );
};
