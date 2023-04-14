import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageLogin from './Components/PageLogin';
import PageMain from './Components/PageMain';
import Section from './Components/Section';
import database from './data/database';

function App() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleAddToDatabase = () => {
    if (image) {
      const id = database.length + 1;
      database.push({ id, image });
      setImage(null);
      return <Navigate to="/section" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/main" element={<PageMain handleImageChange={handleImageChange} handleAddToDatabase={handleAddToDatabase} />} />
        <Route path="/section" element={<Section />} />
      </Routes>
    </Router>
  );
}

export default App;
