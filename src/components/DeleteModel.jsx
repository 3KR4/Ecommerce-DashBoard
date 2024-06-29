import React, { useEffect, useState } from 'react';
import { allContext } from '../AllContext';

export default function DeleteModel() {
  const { showDeleteModel, deleteType, itemToDelete, closeDeleteModel } = allContext();
  const [openModel, setOpenModel] = useState(showDeleteModel);

  useEffect(() => {
    setOpenModel(showDeleteModel);
  }, [showDeleteModel]);

  const onDelete = (id) => {
    console.log('Deleting item with id:', id);
    // Perform delete action here
    closeDeleteModel();
  };

  const handleClose = () => {
    setOpenModel(false);
    closeDeleteModel();
  };

  return (
    <div className={`model delete ${openModel ? 'active' : ''}`}>
      <div className="holder container">
        <h3>Delete</h3>
        <p>Are You Sure You Want To Delete This {deleteType}?</p>
        <div className="ptns">
          <button className="main-buttom" onClick={handleClose}>
            Close
          </button>
          <button className="main-buttom" onClick={() => onDelete(itemToDelete)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
