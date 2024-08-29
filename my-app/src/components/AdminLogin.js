import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div className="adminLog">
      
      <Link to="/login-signup">Login As Admin</Link>
    </div>
  );
};

export default AdminLogin;
