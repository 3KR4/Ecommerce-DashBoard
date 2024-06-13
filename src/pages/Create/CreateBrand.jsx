import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import '../../Css/blogs-brands-categories.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { brands } from '../../components/data'; // Assuming you have a brands data file

export default function CreateBrand() {
  const queryParams = new URLSearchParams(window.location.search);
  const edit = queryParams.get('edit');

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const inputFileRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isSubmited, setisSubmited] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');


  useEffect(() => {
    if (edit) {
      const brandToEdit = brands.find((brand) => brand.id === edit);
      if (brandToEdit) {
        setValue('name', brandToEdit.id);
        setTags(brandToEdit.produce || []);
        setImage(brandToEdit.img);
      }
    }
  }, [edit, setValue]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDrag(false);
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    if (imageFile) {
      setImage(imageFile);
    }
  };

  const handleInputChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    if (imageFile) {
      setImage(imageFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const handleLabelClick = () => {
    inputFileRef.current.click();
  };

  useEffect(() => {
    !image && setisSubmited(false);
  }, [image]);

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      image,
      tags,
    };
    console.log(formData);
  };

  return (
    <div className='create-brand container'>
      <h2 className="sectionTitle">{edit ? 'Edit Brand' : 'Add Brand'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formHolder">
          <div className={`inputHolder ${errors.name ? 'notvalid' : ''}`}>
            <h6 className="placeHolder" onClick={() => document.getElementById('brandName').focus()}>Brand Name</h6>
            <div className="holder">
              <input
                type="text"
                id="brandName"
                {...register("name", {
                  required: "Please enter The Brand Name",
                  minLength: {
                    value: 3,
                    message: "Please enter at least 3 characters"
                  }
                })}
                placeholder="Brand Name"
              />
            </div>
            {errors.name && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="inputHolder tags">
            <h6 className="placeHolder" onClick={() => document.getElementById('brandProduce').focus()}>Brand Produce</h6>
            <div className="bigHolder">
              <div className="holder">
                <input
                  type="text"
                  id="brandProduce"
                  value={tagInput}
                  onChange={handleTagInputChange}
                  placeholder="Brand Produce"
                />
                <button onClick={addTag}>Add</button>
              </div>
              {tags.length === 0 && isSubmited && (
                <span className="error">
                  <AiOutlineExclamationCircle />
                  Please select the product brand
                </span>
              )}
            </div>
            <div className="tagsHolder">
              {tags.length === 0 && (
                <pre className="placeHolder">#0000   #0000   #0000   #0000   #0000</pre>
              )}
              {tags.map((tag, index) => (
                <div key={index} className="tag">
                  <span>#{tag}</span>
                  <button type="button" className="remove" onClick={() => removeTag(index)}>x</button>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" className="main-buttom" onClick={() => setisSubmited(true)}>
            {edit ? 'Update Brand' : 'Create Brand'}
          </button>
        </div>
        <div className="productImages">
          <div
            className={`uploadlabel ${isDrag ? "active" : ""}`}
            style={{ height: '100%', border: `3px dashed ${!image && isSubmited ? '#f43521' : '#f2c23d'}` }}
            onClick={handleLabelClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              <img src={typeof image === 'string' ? image : URL.createObjectURL(image)} alt={typeof image === 'string' ? 'Brand' : image.name} />
            ) : (
              <>
                <CloudUploadIcon style={{ color: !image && isSubmited ? '#F43621E6' : '#f2c23d' }} />
                <p style={{ color: !image && isSubmited ? '#f43521' : '#f2c23d' }}>Click Or Drop Image Here</p>
                <h1 style={{ color: !image && isSubmited ? '#f43521' : '#f2c23d' }}>{isDrag ? "Drop Here!!" : "Click Here!!"}</h1>
              </>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            hidden
            ref={inputFileRef}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
