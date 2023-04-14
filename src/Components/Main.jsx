import React, { useState } from 'react';
import '../styles/stlMain.css';
import { Link } from 'react-router-dom';

function Main() {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [tableData, setTableData] = useState([]);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    if (event.target.files[0]) {
      const newRow = { id: tableData.length + 1, name: event.target.files[0].name };
      setTableData([...tableData, newRow]);
    }
  };

  const handleImageDelete = (id) => {
    setImage(null);
    setTableData(tableData.filter((data) => data.id !== id));
  };

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  return (
    <div className="image-input-container">
      <div className="image-preview-container">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt=""
            style={{ transform: `scale(${scale})`, maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <p>No image preview available.</p>
        )}
        <div className="zoom-buttons">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      </div>
      <div className="input-container">
        <div className="mylabel"><label htmlFor="image-input">Upload Image:</label></div>
        <input
        
          type="file"
          id="image-input"
          name="image-input"
          accept="image/*"
          onChange={handleImageChange}
        />
        <div className="aa">
          <table border={2}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td className='tdname'>{data.name}</td>
                  <td><button onClick={() => handleImageDelete(data.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <Link to='/section'><button>Show Images from Database</button></Link> */}
      </div>
    </div>
  );
}

export default  Main;
