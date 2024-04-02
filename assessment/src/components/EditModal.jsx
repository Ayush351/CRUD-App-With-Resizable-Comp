// // EditModal.jsx
// import React, { useState } from "react";
// import './EditModal.css';


// const EditModal = ({ isOpen, onClose, onSave, initialData }) => {
//   const [data, setData] = useState(initialData);
//   const [isEditing, setIsEditing] = useState(true); // Set isEditing to true by default

 

//   const handleSave = () => {
//     onSave(data);
//     setIsEditing(false);
//     onClose();
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     onClose();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   return (
    
//     <div className={`modal ${isOpen ? "open" : ""}`}>
//       <div className="modal-content">

//         {isEditing && (
//           <>
//             <div>
//               <label>
//                 Name:{" "}
//                 <input
//                   type="text"
//                   name="name"
//                   value={data.name}
//                   onChange={handleChange}
//                 />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Profession:{" "}
//                 <input
//                   type="text"
//                   name="profession"
//                   value={data.profession}
//                   onChange={handleChange}
//                 />
//               </label>
//             </div>
//             <div>
//               <label>
//                 Role:{" "}
//                 <input
//                   type="text"
//                   name="role"
//                   value={data.role}
//                   onChange={handleChange}
//                 />
//               </label>
//             </div>
//             <button style={buttonStyle} onClick={handleSave}>Save</button>
//             <button style={buttonStyle} onClick={handleCancel}>Cancel</button>
//           </>
//         )}
//       </div>
//     </div>
    
//   );
// };

// export default EditModal;

// const buttonStyle = {
//     backgroundColor: "#55c2da", /* Green */
//     border: "none",
//     color: "white",
//     padding: "10px 10px",
//     textAlign: "center",
//     textDecoration: "none",
//     display: "inline-block",
//     fontSize: "10px",
//     margin: "4px 2px",
//     cursor: "pointer",
//     borderRadius: "10px"
//   };

import React, { useState } from "react";
import './EditModal.css';
const EditModal = ({ isOpen, onClose, onSave, initialData, editedData }) => {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = () => {
    onSave(data);
    setIsEditing(false);
    onClose();
  };

  const handleCancel = () => {
    setIsEditing(false);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    editedData({ ...data, [name]: value }); // Pass edited data up to the parent
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        {isEditing && (
          <>
            <div>
              <label>
                Name:{" "}
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Profession:{" "}
                <input
                  type="text"
                  name="profession"
                  value={data.profession}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Role:{" "}
                <input
                  type="text"
                  name="role"
                  value={data.role}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button style={buttonStyle} onClick={handleSave}>Save</button>
            <button style={buttonStyle} onClick={handleCancel}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditModal;

const buttonStyle = {
  backgroundColor: "#5adbb5",
  border: "none",
  color: "white",
  padding: "8px 10px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "12px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "10px"
};

