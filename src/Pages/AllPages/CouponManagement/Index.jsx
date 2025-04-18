



// import Adminheader from 'Components/Adminheader';
// import Sidebar from 'Components/Sidebar';
// import React, { useEffect, useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { FaEdit, FaRegEdit } from 'react-icons/fa';
// import { FiPlus } from 'react-icons/fi';
// import { IoIosArrowForward } from 'react-icons/io';
// import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
// import { MdEdit, MdDelete, MdSave } from 'react-icons/md';
// import { MdToggleOn } from "react-icons/md";
// import Switch from "react-switch";


// import { MdToggleOff } from "react-icons/md";
// import { RiDeleteBin6Line } from 'react-icons/ri';

// import { Link } from 'react-router-dom';
// import { FaSquareCheck } from 'react-icons/fa6';
// import axios from 'axios';
// import API_ENDPOINTS from 'Configs/Endpoints';

// function CouponManagement() {
//     const [couponData, setCouponData] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);
//     const [newCoupon, setNewCoupon] = useState({ code: '', description: '', status: '' });
//     const [isChecked, setIsChecked] = useState(true);
//     const [searchValue, setSearchValue] = useState("")


//     // Pagination state
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 9;

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = couponData.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(couponData.length / itemsPerPage);

//     const handleBack = () => {
//         if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//     };

//     // Add a new row for a coupon
//     const handleAddNew = () => {
//         setCouponData([...couponData, { code: '', description: '', status: true, isNew: true ,minAmount:"",disAmount:""}]);
//     };

//     // Edit coupon
//     const handleEdit = (index) => {
//         setEditIndex(index);
//     };

//     // Save updated or new coupon
//     const handleSave = (index) => {
//         handleUploadCoupon()
//         setCouponData((prev) =>
//             prev.map((item, i) => (i === index ? { ...item, isNew: false } : item))
//         );
//         setEditIndex(null);
//     };

//     // Delete coupon
//     const handleDelete = (index) => {
//         setCouponData(couponData.filter((_, i) => i !== index));
//     };

//     // Handle input change for a specific row
//     const handleInputChange = (index, field, value) => {
//         setCouponData((prev) =>
//             prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
//         );
//     };



//     const handleToggleStatus = (index) => {
//         setCouponData((prev) =>
//             prev.map((item, i) =>
//                 i === index
//                     ? { ...item, status: !item.status }
//                     : item
//             )
//         );
//     };

//      const handleUploadCoupon = async () => {
//        try {
//          const token = localStorage.getItem("authToken");
//          if (!token) {
//            console.error("No token found");
//            return;
//          }

//          const blogData = {
//            code: couponData[couponData.length - 1].code,
//            discountAmount: Number(couponData[couponData.length - 1].disAmount),
//            minAmount: Number(couponData[couponData.length - 1].minAmount),
//          };

//        let response =  await axios.post(API_ENDPOINTS.createCoupon, blogData, {
//            headers: { Authorization: `Bearer ${token}` },
//          });
// console.log("response,",response.data);
//        } catch (error) {
//          console.error("Error uploading blog:", error);
//        }
//      };

//      const getAllCoupons = async () => {
//        try {
//          const token = localStorage.getItem("authToken");
//          if (!token) {
//            console.error("No token found");
//            return;
//          }

        

//        let response = await axios.get(API_ENDPOINTS.getAllCoupons, {
//          headers: { Authorization: `Bearer ${token}` },
//        });
// console.log("response,",response.data);
//        } catch (error) {
//          console.error("Error uploading blog:", error);
//        }
//      };
//     useEffect(() => {
//       getAllCoupons()
//     }, [])
    


//     return (
//       <div className="flex h-screen bg-[#F0F0F0]">
//         <Sidebar />
//         <div className="w-full flex flex-col">
//           <Adminheader />
//           <div className="p-7 overflow-y-auto h-screen scrollbar-none">
//             {/* Header */}
//             <div className="flex justify-between items-center">
//               <div>
//                 <h1 className="text-[32px]">Coupon Management</h1>
//                 <div className="flex gap-2 my-2">
//                   <div className="flex items-center gap-1">
//                     <Link to="/Dashboard" className="text-[#808080]">
//                       Dashboard
//                     </Link>
//                     <IoIosArrowForward className="text-[#808080]" />
//                   </div>
//                   <span className="text-[16px]">Coupon Management</span>
//                 </div>
//               </div>
//               <button
//                 className="flex items-center text-white rounded-[8px] bg-[#3A3A3A] px-5 py-3 gap-2"
//                 onClick={handleAddNew}
//               >
//                 <FiPlus /> Add New Coupon
//               </button>
//             </div>

//             {/* Search Bar */}
//             <div className="search w-1/2 my-4 flex justify-start items-center bg-white rounded-3xl">
//               <CiSearch size="27px" className="text-[#808080] mx-[13px]" />
//               <input
//                 value={searchValue}
//                 onChange={(e) => {
//                   setSearchValue(e.target.value);
//                 }}
//                 className="w-full py-2 bg-transparent outline-none"
//                 placeholder="Search by Coupon Code.."
//                 type="text"
//               />
//             </div>

//             {/* Table Data */}
//             <div className="my-5 overflow-x-auto">
//               <table className="w-full shadow-lg text-left border-collapse">
//                 <thead className="bg-[#3A3A3A] text-white">
//                   <tr>
//                     <th className="p-3 ">Coupon Code</th>
//                     <th className="p-3 ">Discount Amount</th>
//                     <th className="p-3 ">Minimum Amount</th>
//                     <th className="p-3">Description</th>
//                     <th className="p-3">Status</th>
//                     <th className="p-3">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentItems.map((item, index) => (
//                     <tr key={index} className="border-b border-[#D9D9D9]">
//                       {/* Coupon Code */}
//                       <td className="p-3">
//                         {editIndex === index || item.isNew ? (
//                           <input
//                             placeholder="Enter code"
//                             type="text"
//                             value={item.code}
//                             onChange={(e) =>
//                               handleInputChange(index, "code", e.target.value)
//                             }
//                             className="border p-2 w-full rounded-md"
//                           />
//                         ) : (
//                           item.code
//                         )}
//                       </td>

//                       {/* Discount amount */}
//                       <td className="p-3">
//                         {editIndex === index || item.isNew ? (
//                           <input
//                             placeholder="Enter amount"
//                             type="text"
//                             value={item.disAmount}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 index,
//                                 "disAmount",
//                                 e.target.value
//                               )
//                             }
//                             className="border p-2 w-full rounded-md"
//                           />
//                         ) : (
//                           item.disAmount
//                         )}
//                       </td>
//                       {/* minimum Amount	 	 */}
//                       <td className="p-3">
//                         {editIndex === index || item.isNew ? (
//                           <input
//                             placeholder="Enter amount"
//                             type="text"
//                             value={item.minAmount}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 index,
//                                 "minAmount",
//                                 e.target.value
//                               )
//                             }
//                             className="border p-2 w-full rounded-md"
//                           />
//                         ) : (
//                           item.minAmount
//                         )}
//                       </td>
//                       {/* description	 */}
//                       <td className="p-3">
//                         {editIndex === index || item.isNew ? (
//                           <input
//                             placeholder="Enter description"
//                             type="text"
//                             value={item.description}
//                             onChange={(e) =>
//                               handleInputChange(
//                                 index,
//                                 "description",
//                                 e.target.value
//                               )
//                             }
//                             className="border p-2 w-full rounded-md"
//                           />
//                         ) : (
//                           item.description
//                         )}
//                       </td>

//                       {/* Status */}

//                       <td className="p-3    ">
//                         <div className="flex justify-start items-center gap-2">
//                           <Switch
//                             onChange={() => handleToggleStatus(index)}
//                             checked={couponData[index].status}
//                           />

//                           <span className="text-sm  font-medium">
//                             {couponData[index].status ? "Active" : "Inactive"}
//                           </span>
//                         </div>
//                       </td>

//                       {/* Actions */}
//                       <td className="p-3 flex justify-start items-center mt-2 gap-1">
//                         {editIndex === index || item.isNew ? (
//                           <button
//                             onClick={() => handleSave(index)}
//                             className="text-green-500"
//                           >
//                             <FaSquareCheck size={28} />
//                           </button>
//                         ) : (
//                           <button
//                             onClick={() => handleEdit(index)}
//                             className="text-[#3a3a3a]"
//                           >
//                             <MdEdit size={28} />
//                           </button>
//                         )}
//                         <button
//                           onClick={() => handleDelete(index)}
//                           className="text-red-500"
//                         >
//                           <RiDeleteBin6Line size={28} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Pagination Controls */}
//               <div className="buttons flex items-center gap-8 mt-8">
//                 {/* Back Button */}
//                 <button
//                   onClick={handleBack}
//                   disabled={currentPage === 1}
//                   className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${
//                     currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   <IoArrowBack /> <span>Back</span>
//                 </button>

//                 {/* Page Indicator */}
//                 <span>
//                   Page {currentPage} of {totalPages}
//                 </span>

//                 {/* Next Button */}
//                 <button
//                   onClick={handleNext}
//                   disabled={currentPage === totalPages}
//                   className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${
//                     currentPage === totalPages
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//                 >
//                   <IoArrowForward /> <span>Next</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default CouponManagement;
import Adminheader from "Components/Adminheader";
import Sidebar from "Components/Sidebar";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { MdEdit, MdDelete, MdSave } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import Switch from "react-switch";
import { MdToggleOff } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaSquareCheck } from "react-icons/fa6";
import axios from "axios";
import API_ENDPOINTS from "Configs/Endpoints";

function CouponManagement() {
  const [couponData, setCouponData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    description: "",
    status: "",
  });
  const [isChecked, setIsChecked] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = couponData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(couponData.length / itemsPerPage);

  const handleBack = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  // Add a new row for a coupon
  const handleAddNew = () => {
    setCouponData([
      ...couponData,
      {
        code: "",
        description: "",
        isActive: true,
        isNew: true,
        discountAmount: "",
        minAmount: "",
      },
    ]);
  };

  // Edit coupon
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  // Save updated or new coupon
  const handleSave = async (index) => {
    const coupon = couponData[index];

    if (coupon.isNew) {
      await handleUploadCoupon(index);
      getAllCoupons()
    } else {
      await handleUpdateCoupon(index);
    }

    setEditIndex(null);
  };

  // Delete coupon
  const handleDelete = async (index) => {
    const coupon = couponData[index];
    if (!coupon.isNew && coupon._id) {
      await handleDeleteCoupon(coupon._id);
    }
    setCouponData(couponData.filter((_, i) => i !== index));
  };

  // Handle input change for a specific row
  const handleInputChange = (index, field, value) => {
    setCouponData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const handleToggleStatus = async (index) => {
    const updatedCoupons = [...couponData];
    updatedCoupons[index].isActive = !updatedCoupons[index].isActive;
    setCouponData(updatedCoupons);

    // If this is not a new coupon, update it in the backend
    if (!updatedCoupons[index].isNew) {
      await handleUpdateCoupon(index);
    }
  };

  const handleUploadCoupon = async (index) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      const coupon = couponData[index];
      const couponDataToSend = {
        code: coupon.code,
        discountAmount: Number(coupon.discountAmount),
        minAmount: Number(coupon.minAmount),
        isActive: coupon.isActive,
      };

      const response = await axios.post(
        API_ENDPOINTS.createCoupon,
        couponDataToSend,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update the local state with the response data (which includes _id)
      setCouponData((prev) =>
        prev.map((item, i) =>
          i === index ? { ...response.data, isNew: false } : item
        )
      );

      return response.data;
    } catch (error) {
      console.error("Error creating coupon:", error);
      throw error;
    }
  };

  const handleUpdateCoupon = async (index) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      const coupon = couponData[index];
      const couponDataToSend = {
        code: coupon.code,
        discountAmount: Number(coupon.discountAmount),
        minAmount: Number(coupon.minAmount),
        isActive: coupon.isActive,
      };

      const response = await axios.put(
        `${API_ENDPOINTS.updateCoupon}/${coupon._id}`,
        couponDataToSend,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update the local state with the response data
      setCouponData((prev) =>
        prev.map((item, i) => (i === index ? response.data : item))
      );

      return response.data;
    } catch (error) {
      console.error("Error updating coupon:", error);
      throw error;
    }
  };

  const handleDeleteCoupon = async (couponId) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      await axios.delete(`${API_ENDPOINTS.deleteCoupon}/${couponId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Error deleting coupon:", error);
      throw error;
    }
  };

  const getAllCoupons = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get(API_ENDPOINTS.getAllCoupons, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Map the response data to match our local state structure
      const formattedCoupons = response.data.map((coupon) => ({
        _id: coupon._id,
        code: coupon.code,
        discountAmount: coupon.discountAmount,
        minAmount: coupon.minAmount,
        isActive: coupon.isActive,
        description: coupon.description || "",
        isNew: false,
      }));

      setCouponData(formattedCoupons);
    } catch (error) {
      console.error("Error fetching coupons:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCoupons();
  }, []);

  // Filter coupons based on search value
  const filteredCoupons = couponData.filter((coupon) =>
    coupon?.code?.toLowerCase().includes(searchValue?.toLowerCase())
  );

  // Update pagination variables to use filtered data
  const filteredCurrentItems = filteredCoupons.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const filteredTotalPages = Math.ceil(filteredCoupons.length / itemsPerPage);

  return (
    <div className="flex h-screen bg-[#F0F0F0]">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Adminheader />
        <div className="p-7 overflow-y-auto h-screen scrollbar-none">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[32px]">Coupon Management</h1>
              <div className="flex gap-2 my-2">
                <div className="flex items-center gap-1">
                  <Link to="/Dashboard" className="text-[#808080]">
                    Dashboard
                  </Link>
                  <IoIosArrowForward className="text-[#808080]" />
                </div>
                <span className="text-[16px]">Coupon Management</span>
              </div>
            </div>
            <button
              className="flex items-center text-white rounded-[8px] bg-[#3A3A3A] px-5 py-3 gap-2"
              onClick={handleAddNew}
            >
              <FiPlus /> Add New Coupon
            </button>
          </div>

          {/* Search Bar */}
          <div className="search w-1/2 my-4 flex justify-start items-center bg-white rounded-3xl">
            <CiSearch size="27px" className="text-[#808080] mx-[13px]" />
            <input
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
              className="w-full py-2 bg-transparent outline-none"
              placeholder="Search by Coupon Code.."
              type="text"
            />
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center my-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}

          {/* Table Data */}
          {!isLoading && (
            <div className="my-5 overflow-x-auto">
              <table className="w-full shadow-lg text-left border-collapse">
                <thead className="bg-[#3A3A3A] text-white">
                  <tr>
                    <th className="p-3">Coupon Code</th>
                    <th className="p-3">Discount Amount</th>
                    <th className="p-3">Minimum Amount</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCurrentItems.length > 0 ? (
                    filteredCurrentItems.map((item, index) => {
                      const globalIndex = couponData.findIndex(
                        (c) => c._id === item._id || (item.isNew && c.isNew)
                      );
                      return (
                        <tr
                          key={item._id || index}
                          className="border-b border-[#D9D9D9]"
                        >
                          {/* Coupon Code */}
                          <td className="p-3">
                            {editIndex === globalIndex || item.isNew ? (
                              <input
                                placeholder="Enter code"
                                type="text"
                                value={item.code}
                                onChange={(e) =>
                                  handleInputChange(
                                    globalIndex,
                                    "code",
                                    e.target.value
                                  )
                                }
                                className="border p-2 w-full rounded-md"
                              />
                            ) : (
                              item.code
                            )}
                          </td>

                          {/* Discount amount */}
                          <td className="p-3">
                            {editIndex === globalIndex || item.isNew ? (
                              <input
                                placeholder="Enter amount"
                                type="number"
                                value={item.discountAmount}
                                onChange={(e) =>
                                  handleInputChange(
                                    globalIndex,
                                    "discountAmount",
                                    e.target.value
                                  )
                                }
                                className="border p-2 w-full rounded-md"
                              />
                            ) : (
                              item.discountAmount
                            )}
                          </td>
                          {/* minimum Amount */}
                          <td className="p-3">
                            {editIndex === globalIndex || item.isNew ? (
                              <input
                                placeholder="Enter amount"
                                type="number"
                                value={item.minAmount}
                                onChange={(e) =>
                                  handleInputChange(
                                    globalIndex,
                                    "minAmount",
                                    e.target.value
                                  )
                                }
                                className="border p-2 w-full rounded-md"
                              />
                            ) : (
                              item.minAmount
                            )}
                          </td>
                          {/* description */}
                          <td className="p-3">
                            {editIndex === globalIndex || item.isNew ? (
                              <input
                                placeholder="Enter description"
                                type="text"
                                value={item.description}
                                onChange={(e) =>
                                  handleInputChange(
                                    globalIndex,
                                    "description",
                                    e.target.value
                                  )
                                }
                                className="border p-2 w-full rounded-md"
                              />
                            ) : (
                              item.description
                            )}
                          </td>

                          {/* Status */}
                          <td className="p-3">
                            <div className="flex justify-start items-center gap-2">
                              <Switch
                                onChange={() => handleToggleStatus(globalIndex)}
                                checked={item.isActive}
                              />

                              <span className="text-sm font-medium">
                                {item.isActive ? "Active" : "Inactive"}
                              </span>
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="p-3 flex justify-start items-center mt-2 gap-1">
                            {editIndex === globalIndex || item.isNew ? (
                              <button
                                onClick={() => handleSave(globalIndex)}
                                className="text-green-500"
                              >
                                <FaSquareCheck size={28} />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleEdit(globalIndex)}
                                className="text-[#3a3a3a]"
                              >
                                <MdEdit size={28} />
                              </button>
                            )}
                            <button
                              onClick={() => handleDelete(globalIndex)}
                              className="text-red-500"
                            >
                              <RiDeleteBin6Line size={28} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-4 text-center">
                        No coupons found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination Controls */}
              {filteredCoupons.length > 0 && (
                <div className="buttons flex items-center gap-8 mt-8">
                  {/* Back Button */}
                  <button
                    onClick={handleBack}
                    disabled={currentPage === 1}
                    className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${
                      currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <IoArrowBack /> <span>Back</span>
                  </button>

                  {/* Page Indicator */}
                  <span>
                    Page {currentPage} of {filteredTotalPages}
                  </span>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    disabled={currentPage === filteredTotalPages}
                    className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${
                      currentPage === filteredTotalPages
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <IoArrowForward /> <span>Next</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CouponManagement;