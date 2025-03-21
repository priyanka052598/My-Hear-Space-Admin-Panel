import Adminheader from 'Components/Adminheader'
import Sidebar from 'Components/Sidebar'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { PiExportBold } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import TransactionDetails from './Components/TransactionDetails'
import Analytics from './Components/Analytics'
import axios from 'axios'
import API_ENDPOINTS from 'Configs/Endpoints'

function WalletManagement() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("User Details");
  let tabs = ["User Details", "Transaction Details", "Analytics"];
  const [searchQuery, setSearchQuery] = useState("");
  const [walletData, setWalletData] = useState([]);

  let tableData = [
    {
      phone: " 6355806885",
      walletbalance: " 1,200.45",
      totalcredited: "1200",
    },
    {
      phone: " 6355806885",
      walletbalance: " 1,200.45",
      totalcredited: "1200",
    },
  ];
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of rows per page

  // Calculate the indices for slicing the table data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = walletData.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(walletData.length / itemsPerPage);

  // Handle Back button click
  const handleBack = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const getWallets = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Retrieve and parse user data
      // const token = user?.token; // Extract the token

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get(
        `${API_ENDPOINTS.getUserWallet}?search=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        }
      );
      setWalletData(response.data.data || []);
      // setListnerData(response.data);
      response.data.data.length > 0 && console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching listeners:", error);
    }
  };

  const fetchWallets = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get(
        `${API_ENDPOINTS.getUserWallet}?search=${searchQuery}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
console.log("response.data", response.data);
      setWalletData(response.data.users || []);
      setCurrentPage(1); // Reset pagination on search
    } catch (error) {
      console.error("Error fetching wallets:", error);
    }
  };
  useEffect(() => {
    

    // Run immediately on mount

    // Debounce API call when searchQuery changes
    const delayDebounce = setTimeout(fetchWallets, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]); // ✅ Empty dependency array ensures it runs once on mount

 

  useEffect(() => {
    // getWallets();
    fetchWallets();
    // getTransactions()

  }, []);


  console.log("walletData", walletData);
  return (
    <div className="flex h-screen bg-[#F0F0F0]">
      <Sidebar />
      <div className=" w-full  flex flex-col">
        <Adminheader />
        <div className="p-7  6 overflow-y-auto h-screen scrollbar-none">
          {/* headings */}
          <div className="headings flex justify-between items-center">
            <div className="left">
              <h1 className="text-[32px]">User and Wallet Details</h1>
              <div className="flex gap-2 my-2">
                <div className=" dashbaord flex justify-start items-center gap-1">
                  <div className=" text-[#808080]">Dashboard</div>{" "}
                  <IoIosArrowForward className="text-[#808080]" />
                </div>
                <div className="listener text-[16px]">
                  User and Wallet Details{" "}
                </div>
              </div>
            </div>
            <Link
              to="/User&WalletDetails/MinimumWalletBalance"
              className="right cursor-pointer flex self-center  text-white rounded-[8px] items-center bg-[#3A3A3A] px-5 py-3 gap-2 w-fit"
            >
              Minimum Wallet Balance <IoArrowForward className="text-[20px]" />
            </Link>
          </div>
          {/* Tabs */}
          <div className="w-fit p-2 my-4 flex justify-between gap-4  bg-[#3A3A3A] rounded-[12px]">
            {tabs.map((item) => {
              return (
                <div
                  onClick={() => {
                    setActiveTab(item);
                  }}
                  className={`px-4 py-1  text-center  cursor-pointer rounded-[8px] ${
                    activeTab == item
                      ? "bg-white text-black"
                      : "text-white bg-[#3A3A3A]"
                  }`}
                >
                  {item}
                </div>
              );
            })}
          </div>
          {activeTab == "Transaction Details" && <TransactionDetails />}
          {activeTab == "Analytics" && <Analytics />}
          {activeTab == "User Details" && (
            <div>
              {/* inputs */}

              <div className="search w-1/2 border-[1px] border-[#808080] flex justify-start items-center bg-white rounded-3xl ">
                <CiSearch
                  size={"27px"}
                  className=" text-[#808080]  mx-[13px] "
                />
                <input
                  className="w-full mr-3 py-2 rounded-3xl bg-white outline-none"
                  placeholder="Search by Phone Number"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* Tabledata */}

              <div className="my-5  font-sans overflow-x-auto">
                <table className="w-full shadow-lg text-left border-collapse">
                  <thead className="bg-[#3A3A3A] text-white">
                    <tr>
                      <th className="p-3">Sr. No.</th>
                      <th className="p-3">User’s Registered phone number </th>
                      <th className="p-3">Wallet Balance (₹)</th>
                      <th className="p-3">Total Credited (₹)</th>
                      <th className="p-3">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item, index) => (
                      <tr
                        // key={index}
                        // className={`${
                        //   index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        // } text-black`}
                        className="border-b-[1px] border-[#D9D9D9]"
                      >
                        <td className="p-3">
                          {index + 1 + (currentPage - 1) * itemsPerPage}
                        </td>
                        <td className="p-3 flex justify-start items-center gap-1">
                          {item.phone}{" "}
                        </td>
                        <td className="p-3">{item.walletBalance} </td>
                        <td className="p-3">{item.totalCredited} </td>
                        <td className="p  w-fit">
                          {" "}
                          <Link
                            state={{
                              phone: item.phone,
                              
                            }}
                            to="/User&WalletDetails/WalletDetails"
                          >
                            <div className="border-[1px] cursor-pointer rounded-[6px] px-4 py-1 border-black w-fit">
                              <IoArrowForward className="text-[18px] font-normal" />
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination Controls */}
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
                    Page {currentPage} of {totalPages}
                  </span>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`back w-fit border-[1px] border-[#808080] rounded-[8px] px-7 py-2 flex justify-center items-center gap-2 ${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <IoArrowForward /> <span>Next</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletManagement