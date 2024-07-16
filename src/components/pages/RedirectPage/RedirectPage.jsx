import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.replace('https://www.inwero.pl');
  }, [navigate]);

  return (
    <div>
      <h2>Redirecting...</h2>
    </div>
  );
};

export default RedirectPage;
