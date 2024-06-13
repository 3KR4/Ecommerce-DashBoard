import { useEffect, useRef, useState } from 'react';
import '../Css/landing-about.css'
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { about, landing } from '../components/data';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function Landing() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);
  const inputFileRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [isFromAbout, setIsFromAbout] = useState(false);
  const [sliceToEdit, setSliceToEdit] = useState(null);

  useEffect(() => {
    if (sliceToEdit) {
      if (isFromAbout) {
        setValue('head', sliceToEdit.head);
        setValue('bodys', sliceToEdit.bodys.join('\n'));
      } else {
        setValue('title', sliceToEdit.title);
        setValue('link', sliceToEdit.link);
        setImage(sliceToEdit.img);
      }
    }
  }, [sliceToEdit, setValue, isFromAbout]);

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

  const onSubmit = (data) => {
    if (isFromAbout) {
      const formData = {
        head: data.head,
        bodys: data.bodys.split('\n').filter(body => body.trim() !== ''),
      };
      console.log(formData);
    } else {
      const formData = {
        title: data.title,
        link: data.link,
        img: image,
      };
      console.log(formData);
    }
    resetForm();
    setOpenModel(false);
  };

  const resetForm = () => {
    reset({
      title: '',
      link: '',
      head: '',
      bodys: '',
    });
    setImage(null);
    setSliceToEdit(null);
    setIsSubmitted(false);
  };

  return (
    <div className='landing container'>
      <div className="landing-section">
        <h2 className="sectionTitle">Landing Slides</h2>
        <div className='holder'>
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={1150}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            <button className='main-buttom add' onClick={() => {
              setOpenModel(true);
              setIsFromAbout(false);
            }}>Add Slide</button>

            {landing.slides.map((slide, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <Link to={slide.link}><img src={slide.img} alt="" /></Link>
                <div className="actions">
                  <FiEdit onClick={() => {
                    setSliceToEdit(slide);
                    setOpenModel(true);
                    setIsFromAbout(false);
                  }} />|
                  <RiDeleteBin6Line />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="second_section">
            {landing.section.map((section, index) => (
              <div key={index} className="card">
                <Link to={section.link}><img src={section.img} alt="" /></Link>
                <div className="actions">
                  <FiEdit onClick={() => {
                    setSliceToEdit(section);
                    setOpenModel(true);
                    setIsFromAbout(false);
                  }} />|
                  <RiDeleteBin6Line />
                </div>
              </div>
            ))}
            {landing.section.length <= 3 && (
              <button className='main-buttom add' onClick={() => {
                setOpenModel(true);
                setIsFromAbout(false);
              }}>Add Slide</button>
            )}
          </div>
        </div>
      </div>
      <div className="about-section">
      <div className="head">
        <h2 className="sectionTitle">About Info</h2>
        <button className='main-buttom' onClick={() => {
          setIsFromAbout(true)
          setOpenModel(true);
        }}>Add About</button>
      </div>
        <div className="aboutHolder">
          {about.map((x) => (
            <div className='card' key={x.id}>
              <h3>{x.head}
                <div className="actions">
                  <FiEdit onClick={() => {
                    setSliceToEdit(x);
                    setIsFromAbout(true);
                    setOpenModel(true);
                  }} />|
                  <RiDeleteBin6Line />
                </div>
              </h3>
              <div className='details'>
                {x.bodys.map((body, index) => (
                  <p key={index}>{body}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`model ${openModel ? 'active' : ''}`}>
        <div className="holder container">
          {!isFromAbout ? (
            <>
              <h3>Add Slice <IoClose onClick={() => {
                setOpenModel(false);
                resetForm();
              }} /></h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`inputHolder ${errors.title ? 'notvalid' : ''}`}>
                  <h6 className="placeHolder" onClick={() => document.getElementById('sliceTitle').focus()}>Slice Title</h6>
                  <div className="holder">
                    <input
                      type="text"
                      id="sliceTitle"
                      {...register("title", {
                        required: "Please enter the Slice Title",
                        minLength: {
                          value: 3,
                          message: "Please enter at least 3 characters"
                        }
                      })}
                      placeholder="Slice Title"
                    />
                  </div>
                  {errors.title && (
                    <span>
                      <AiOutlineExclamationCircle />
                      {errors.title.message}
                    </span>
                  )}
                </div>
                <div className={`inputHolder ${errors.link ? 'notvalid' : ''}`}>
                  <h6 className="placeHolder" onClick={() => document.getElementById('sliceLink').focus()}>Slice Link</h6>
                  <div className="holder">
                    <input
                      type="url"
                      id="sliceLink"
                      {...register("link", {
                        required: "Please enter the Slice Link",
                      })}
                      placeholder="Slice Link"
                    />
                  </div>
                  {errors.link && (
                    <span>
                      <AiOutlineExclamationCircle />
                      {errors.link.message}
                    </span>
                  )}
                </div>
                <div className="productImages">
                  <div
                    className={`uploadlabel ${isDrag ? "active" : ""}`}
                    style={{ height: '100%', border: `3px dashed ${!image && isSubmitted ? '#f43521' : '#f2c23d'}` }}
                    onClick={handleLabelClick}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    {image ? (
                      <img src={typeof image === 'string' ? image : URL.createObjectURL(image)} alt='' />
                    ) : (
                      <>
                        <CloudUploadIcon style={{ color: !image && isSubmitted ? '#F43621E6' : '#f2c23d' }} />
                        <p style={{ color: !image && isSubmitted ? '#f43521' : '#f2c23d' }}>Click Or Drop Image Here</p>
                        <h1 style={{ color: !image && isSubmitted ? '#f43521' : '#f2c23d' }}>{isDrag ? "Drop Here!!" : "Click Here!!"}</h1>
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
                <button type="submit" className="main-buttom" onClick={() => setIsSubmitted(true)}>
                  {sliceToEdit ? 'Update Slice' : 'Add Slice'}
                </button>
              </form>
            </>
            ) : (
              <>
                <h3>Add About Info <IoClose onClick={() => {
                  setOpenModel(false);
                  resetForm();
                }} /></h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={`inputHolder ${errors.head ? 'notvalid' : ''}`}>
                    <h6 className="placeHolder" onClick={() => document.getElementById('aboutHead').focus()}>The Head</h6>
                    <div className="holder">
                      <input
                        type="text"
                        id="aboutHead"
                        {...register("head", {
                          required: "Please enter The Info Head",
                          minLength: {
                            value: 3,
                            message: "Please enter at least 3 characters"
                          }
                        })}
                        placeholder="The Head"
                      />
                    </div>
                    {errors.head && (
                      <span>
                        <AiOutlineExclamationCircle />
                        {errors.head.message}
                      </span>
                    )}
                  </div>
                  <div className={`inputHolder ${errors.bodys ? 'notvalid' : ''}`}>
                    <h6 className="placeHolder" onClick={() => document.getElementById('aboutBodys').focus()}>The Information</h6>
                    <div className="holder">
                      <textarea
                        id="aboutBodys"
                        {...register("bodys")}
                        placeholder="The Information"
                        rows={5}
                      />
                    </div>
                    {errors.bodys && (
                      <span>
                        <AiOutlineExclamationCircle />
                        {errors.bodys.message}
                      </span>
                    )}
                  </div>
                  <button type="submit" className="main-buttom" onClick={() => setIsSubmitted(true)}>
                    {sliceToEdit ? 'Update Info' : 'Add Info'}
                  </button>
                </form>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
