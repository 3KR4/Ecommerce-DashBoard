import '../../Css/blogs-brands-categories.css';
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { blogs } from '../../components/data'; // Assuming you have a blogs data file

const CreateBlogs = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const edit = queryParams.get('edit');

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const priceRegex = /^\d+\.\d{2}$|^\d+\.\d{1}$|^\d+$/;

  // Images
  const [image, setImage] = useState(null);
  const inputFileRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isSubmited, setisSubmited] = useState(false);

  useEffect(() => {
    if (edit) {
      const blogToEdit = blogs.find((blog) => blog.id === +edit);
      if (blogToEdit) {
        setValue('title', blogToEdit.title);
        setValue('details', blogToEdit.details);
        setValue('aboutInfo', blogToEdit.aboutInfo);
        setSpecifications(blogToEdit.moreContent || []);
        setImage(blogToEdit.img);
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
      <h2 className="sectionTitle">{edit ? 'Edit Blog' : 'Add Blog'}</h2>
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
              <h6 className="placeHolder" onClick={() => document.getElementById('BlogInfo').focus()}>Blog Info</h6>
              <div className="holder">
                <textarea
                  id="BlogInfo"
                  {...register("aboutInfo", {
                    required: "Please enter The Blog Info",
                    minLength: {
                      value: 6,
                      message: "Please enter at least 1 line"
                    }
                  })}
                  placeholder="Blog Info"
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
          }}>{edit ? 'Update Blog' : 'Create Blog'}</button>
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
                <img src={typeof image === 'string' ? image : URL.createObjectURL(image)} alt={typeof image === 'string' ? 'Blog' : image.name}  />
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

export default CreateBlogs;
