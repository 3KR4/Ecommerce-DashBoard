import '../Css/blogs-brands-categories.css'
import { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Blogs = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const priceRegex = /^\d+\.\d{2}$|^\d+\.\d{1}$|^\d+$/;

  // Images
  const [image, setImage] = useState(null);
  const inputFileRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isSubmited, setisSubmited] = useState(false);
  let isThereImg = false;

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
    isThereImg = !image;
  }, [image]);

  // Specifications
  const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
  const [specError, setSpecError] = useState(false);

  const addSpecification = () => {
    if (specifications.length === 0 || (specifications[specifications.length - 1].key.trim() !== '' && specifications[specifications.length - 1].value.trim() !== '')) {
      setSpecError(false);
      setSpecifications([...specifications, { key: '', value: '' }]);
    } else {
      setSpecError(true);
    }
  };

  const removeSpecification = (index) => {
    const newSpecifications = specifications.filter((_, i) => i !== index);
    setSpecifications(newSpecifications);
    setSpecError(false);
  };

  const handleSpecificationChange = (index, type, value) => {
    const newSpecifications = [...specifications];
    newSpecifications[index][type] = value;
    setSpecifications(newSpecifications);
    setSpecError(false);
  };

  const onSubmit = (data) => {
    const specificationsObject = specifications.reduce((obj, item) => {
      if (item.key.trim() !== '') {
        obj[item.key] = item.value;
      }
      return obj;
    }, {});
  
    const formData = {
      ...data,
      image,
      moreContent: specificationsObject,
    };
  
    if (image) {
      console.log(formData);
    }
  };

  return (
    <div className='addBlogPage container'>
      <h2 className="sectionTitle">Add Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formHolder">
          {/* NAME */}
          <div className={`inputHolder ${errors.title ? 'notvalid' : ''}`}>
            <h6 className="placeHolder" onClick={() => document.getElementById('blogTitle').focus()}>Blog Title</h6>
            <div className="holder">
              <input
                type="text"
                id="blogTitle"
                {...register("title", {
                  required: "Please enter The Product Title",
                  minLength: {
                    value: 3,
                    message: "Please enter at least 3 characters"
                  }
                })}
                placeholder="Blog Title"
              />
            </div>
            {errors.title && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.title.message}
              </span>
            )}
          </div>
          {/* Details */}
          <div className={`inputHolder ${errors.details ? 'notvalid' : ''}`}>
            <h6 className="placeHolder" onClick={() => document.getElementById('BlogDetails').focus()}>Blog Details</h6>
            <div className="holder">
              <input
                type="text"
                id="BlogDetails"
                {...register("details", {
                  required: "Please enter the Blog Details",
                  minLength: {
                    value: 15,
                    message: "Enter at least 15 characters"
                  }
                })}
                placeholder="Blog Details"
              />
            </div>
            {errors.details && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.details.message}
              </span>
            )}
          </div>
          {/* ABOUT */}
          <div className="holder">
            <div className={`inputHolder ${errors.aboutInfo ? 'notvalid' : ''}`}>
              <h6 className="placeHolder" onClick={() => document.getElementById('productInfo').focus()}>Product Info (optional)</h6>
              <div className="holder">
                <textarea
                  id="productInfo"
                  {...register("aboutInfo", {
                    required: "Please enter The Blogs Info",
                    minLength: {
                      value: 6,
                      message: "Please enter at least 1 line"
                    }
                  })}
                  placeholder="Product Info (optional)"
                  rows={5}
                />
              </div>
              {errors.aboutInfo && (
                <span>
                  <AiOutlineExclamationCircle />
                  {errors.aboutInfo.message}
                </span>
              )}
            </div>
          </div>
          {/* specification */}
          <div className="specificHolder">
            <pre className="placeHolder">Add More Content</pre>
            {specifications.length > 0 && (
              <div className="holder">
                {specifications.map((spec, index) => (
                  <div key={index} className="inputHolder">
                    <input
                      type="text"
                      value={spec.key}
                      onChange={(e) => handleSpecificationChange(index, 'key', e.target.value)}
                      placeholder="Title"
                      className={specError && index === specifications.length - 1 && spec.key.trim() === '' ? 'notvalid' : ''}
                    />
                    <textarea
                      value={spec.value}
                      onChange={(e) => handleSpecificationChange(index, 'value', e.target.value)}
                      placeholder="Body"
                      className={specError && index === specifications.length - 1 && spec.value.trim() === '' ? 'notvalid' : ''}
                    />
                    <button type="button" className="remove" onClick={() => removeSpecification(index)}>x</button>
                  </div>
                ))}
              </div>
            )}
            <div className="btnHolder">
              {specError && (
                <span className="error">
                  <AiOutlineExclamationCircle />
                  please enter the last key and value first
                </span>
              )}
              <button type="button" className="button" onClick={addSpecification}>
                {specifications.length === 0 ? 'Add' : 'Add More'}
              </button>
            </div>
          </div>
          <button type="submit" className="main-buttom" onClick={() => {
              setisSubmited(true)
          }}>Create Product</button>
        </div>

        <div className="productImages">
          <div 
            className={`uploadlabel ${isDrag ? "active" : null}`} 
            style={{ height: '100%', border: `3px dashed ${!image && isSubmited ? '#f43521' : '#f2c23d'}`}}
            onClick={handleLabelClick}
            onDrop={handleDrop} 
            onDragOver={handleDragOver}
          >
            {image ? (
                <img src={URL.createObjectURL(image)} alt={image.name}  />
            ) : (
              <>
                <CloudUploadIcon style={{color: !image && isSubmited ? '#F43621E6' : '#f2c23d',}}/>
                <p style={{color: !image && isSubmited ? '#f43521' : '#f2c23d',}}>Click Or Drop Image Here</p>
                <h1 style={{color: !image && isSubmited ? '#f43521' : '#f2c23d',}}>{isDrag ? "Drop Here!!" : "Click Here!!"}</h1>
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
};

export default Blogs;
