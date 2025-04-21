import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';

const Loading = () => {
  const { navigate } = useAppContext();
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const nextUrl = query.get('next');

  useEffect(() => {
    if (nextUrl) {
      setTimeout(() => {
        navigate(`/${nextUrl}`);
      }, 5000); // Delay of 5 seconds
    }
  }, [nextUrl]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-lg font-medium text-primary-dull">Redirecting, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;