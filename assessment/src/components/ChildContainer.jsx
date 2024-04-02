import React, { useState, useEffect } from "react";
import EditModal from "./EditModal";

const ChildContainer = ({ name, number }) => {
  const initialData = {
    name: "Saniya Imroze",
    profession: "Software Developer",
    role: "Community Leader",
  };

  const [data, setData] = useState(initialData);
  const [originalData, setOriginalData] = useState(initialData); // Store original data
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  useEffect(() => {
    setOriginalData(data); // Update original data whenever data changes
  }, [data]);

  const handleDataChange = (newData) => {
    setData(newData);
    setIsModalOpen(false);
    if (isAddingNew) {
      setAddCount(addCount + 1);
      setIsAddingNew(false);
    } else {
      setUpdateCount(updateCount + 1);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAddingNew(false);
    // Revert back to original data when closing modal without saving
    setData(originalData);
  };

  const handleAddNew = () => {
    setData(initialData);
    setIsModalOpen(true);
    setIsAddingNew(true);
  };

  return (
    <div className={`child ${name}`}>
      <h2>Hii </h2>
      <p>
        I am {data.name ? data.name : "...😎"}. I am{" "}
        {data.profession ? data.profession : "...😉"}. I am{" "}
        {data.role ? data.role : "...🙂"}.
      </p>
      <div className="api-stats">
        <span className="api-stat" style={{ borderColor: 'red' }}>API Calls: {addCount + updateCount}</span>
        <span className="api-stat" style={{ borderColor: 'blue' }}>Add Count: {addCount}</span>
        <span className="api-stat" style={{ borderColor: 'orange' }}>Update Count: {updateCount}</span>
      </div>

      <div className="button-container">
        <button style={buttonStyle} onClick={handleAddNew}>
          Add
        </button>
        <button style={buttonStyle} onClick={handleOpenModal}>
          Update
        </button>
      </div>

      {isModalOpen && (
        <EditModal
          onClose={handleCloseModal}
          onSave={handleDataChange}
          initialData={data}
          editedData={setData}
        />
      )}

      {/* CSS Styles */}
      <style>{`
        .child {
          margin-bottom: 20px;
          text-align: center; /* Center child elements */
        }
        
        .api-stats {
          font-size: 14px;
          margin-top: 10px;
          display: flex;
          justify-content: center; /* Center API stats */
          flex-wrap: wrap; /* Allow wrapping */
        }

        .api-stat {
          margin-right: 10px; /* Add space between spans */
          border: 2px solid #ddd; /* Add border to each span */
          padding: 5px; /* Add padding for better spacing */
          border-radius: 5px; /* Add border radius for rounded corners */
        }

        .button-container {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default ChildContainer;

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "10px 10px",
  textDecoration: "none",
  fontSize: "14px",
  margin: "2px 2px",
  cursor: "pointer",
  borderRadius: "10px",
};
