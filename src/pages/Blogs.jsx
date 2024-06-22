import '../Css/showData.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { blogs } from '../components/data';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReactPaginate from 'react-paginate';
import { paragraph } from '../Methods';

export default function Blogs() {
  const fields = ['image', 'title', 'body', 'actions'];

  const renderBlogInfo = (blog, field) => {
    switch (field) {
      case 'image':
        return (
          <div className='image'>
            <img src={blog.img} alt={`${blog.title}`} />
          </div>
        );
      case 'title':
        return (
          <div className="title">
            <h3>{paragraph(blog.title, 45)}</h3>
          </div>
        );
      case 'body':
        return (
          <div className="body">
            <p>{paragraph(blog.details, 95)}</p>
          </div>
        );
      case 'actions':
        return (
          <div className="actions">
            <Link to={`/blogs/create?edit=${blog.id}`}><FiEdit /></Link>
            |
            <RiDeleteBin6Line />
          </div>
        );
      default:
        return null;
    }
  };

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 6;
    setCurrentItems(blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / 6));
  }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % blogs.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <div className='show-data blogs container'>
      <div className="head">
        <h2 className="sectionTitle">All Blogs</h2>
        <Link className='main-buttom' to='/blogs/create'>Create Blog</Link>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              {fields.map((field, index) => (
                <th key={index}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((blog, index) => (
              <tr key={index}>
                {fields.map((field) => (
                  <td key={field}>
                    {renderBlogInfo(blog, field)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paginationHolder">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
        />
      </div>
    </div>
  );
}
