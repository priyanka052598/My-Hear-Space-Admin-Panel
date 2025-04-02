
import images from "assets";
import axios from "axios";
import SucessfullPopup from "Components/SucessfullPopup";
import API_ENDPOINTS from "Configs/Endpoints";
import React, { useEffect, useRef, useState } from "react";

function ListenerDetails({ listner, status }) {
  // State to track if we're in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State for storing original values before editing
  const [originalData, setOriginalData] = useState(null);
  const [listnerData, setListnerData] = useState();

  // Form field states
  const [gender, setGender] = useState("Male");
  const [name, setName] = useState(listner?.name);
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
       const[showPopup,setShowPopup]=useState(false)
  
  const [availability, setAvailability] = useState({
    chat: false,
    phoneCall: false,
    videoCall: false,
  });
  const [profileImage, setProfileImage] = useState(images.profile1);
  const fileInputRef = useRef(null);

  // Handle availability checkbox changes
  const handleAvailabilityChange = (type) => {
    setAvailability((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  console.log("listner", listner);
  // Start editing - save the current values
  const handleEditClick = () => {
    // Store original data before editing
    setOriginalData({
      gender,
      name,
      age,
      bio,
      email,
      phone,
      address,
      availability: { ...availability },
      profileImage,
    });

    setIsEditing(true);
  };

  // Cancel editing - restore original values
  const handleCancelClick = () => {
    if (originalData) {
      // Restore original values
      setGender(originalData.gender);
      setName(originalData.name);
      setAge(originalData.age);
      setBio(originalData.bio);
      setEmail(originalData.email);
      setPhone(originalData.phone);
      setAddress(originalData.address);
      setProfileImage(originalData.profileImage);
      setAvailability(originalData.availability);
    }

    setIsEditing(false);
    setOriginalData(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  // Open file browser when "Change Image" button is clicked
  const handleChangeImageClick = () => {
    fileInputRef.current.click();
  };

 
  const handleSubmitClick = async () => {
    try {
      // Call the API update function
      await UpdateListnerDetails();

      // Exit edit mode
      setIsEditing(false);
      setOriginalData(null);

      // Show success message
      alert("Profile updated successfully!");

      // Refresh the listener data
      getListener();
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const getListener = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Retrieve and parse user data
      // const token = user?.token; // Extract the token

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get(
        `${API_ENDPOINTS.getListnerProfile}${listner._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        }
      );

      setListnerData(response.data.listener); // Ensure you're accessing response.data
      setAvailability(response.data.listener.availability);
      setEmail(response.data.listener.email);
      setAge(response.data.listener.age);
      setPhone(response.data.listener.phone);
      setProfileImage(response.data.listener.profilePicture);
      setBio(response.data.listener.description);
      setName(response.data.listener.name);

      console.log("esponse.data.data.email", response.data);
    } catch (error) {
      console.error("Error fetching listeners:", error);
    }
  };

  useEffect(() => {
    getListener();
  }, []);

  const UpdateListnerDetails = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Retrieve and parse user data
      // const token = user?.token; // Extract the token

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.put(
        `${API_ENDPOINTS.UpdateListnerProfile}${listner._id}`,
        {
          profilePicture: profileImage,
          email: email,
          age: age,
          phone: phone,
          description: bio,
          availability: availability,
          gender: gender,
          address: address,
          name: name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        }
      );
    } catch (error) {
      console.error("Error fetching listeners:", error);
    }
  };
  const ApproveListner = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Retrieve and parse user data
      // const token = user?.token; // Extract the token

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.put(
        `${API_ENDPOINTS.approveListnerProfile}${listner._id}/profile/review`,
        {
          action:"approve",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        }
      );
      setShowPopup(true)
      getListener();
    } catch (error) {
      console.error("Error fetching listeners:", error);
    }
  };


  return (
    <>
      <div className="flex px-7 py-4 gap-7">
        <div className=" w-[75%] flex flex-col">
          <div className=" rounded-[24px] bg-white px-[40px] py-[30px]">
            <h2 className="text-[24px] mb-5 ">Profile Details</h2>
            <div className="flex flex-col gap-[24px]">
              <div className="gender ">
                <h3 className="text-[18px] my-1">Gender</h3>
                <div className="flex gap-8">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="mr-2 accent-black"
                      disabled={!isEditing}
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
                      className="mr-2 accent-black"
                      disabled={!isEditing}
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="name">
                <h3 className="text-[18px] my-1">Name</h3>
                <div className="w-full border-[1px]   border-[#808080] py-2 px-3 rounded-[12px]">
                  {" "}
                  <input
                    placeholder="Listener Name"
                    className="w-full outline-transparent"
                    type="text"
                    name=""
                    id=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="Age">
                <h3 className="text-[18px] my-1">Age ( in years )</h3>
                <div className="w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]">
                  {" "}
                  <input
                    placeholder="23"
                    className="w-full outline-transparent"
                    name=""
                    id=""
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="Language">
                <h3 className="text-[18px] my-1">Languages you can speak</h3>
                <div className="buttons flex  gap-[12px]">
                  <div className=" w-fit border-[1px] border-[#808080]  py-2 px-[24px] rounded-[12px]">
                    Hindi
                  </div>
                  <div className=" w-fit border-[1px] border-[#808080]  py-2 px-[24px] rounded-[12px]">
                    English
                  </div>
                  <div className=" w-fit border-[1px] border-[#808080]  py-2 px-[24px] rounded-[12px]">
                    Tamil
                  </div>
                </div>
              </div>
              <div className="bio">
                <h3 className="text-[18px] my-1 font-500">A short Bio</h3>
                <div className="buttons flex  gap-[12px]">
                  <textarea
                    rows={1}
                    placeholder="Enter Description "
                    className="w-full  border-[1px] font-400 border-[#808080]  py-2 px-[12px] rounded-[12px] outline-none bg-transparent"
                    onInput={(e) => {
                      e.target.style.height = "auto"; // Reset height
                      e.target.style.height = e.target.scrollHeight + "px"; // Set to new height
                    }}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    type="text"
                    name=""
                    id=""
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="available">
                <h3 className="text-[18px] my-1 font-500">
                  You are available for{" "}
                </h3>
                <div className="flex gap-11">
                  <div className="flex justify-start items-center gap-3">
                    <input
                      className="w-5 h-5 accent-black"
                      type="checkbox"
                      checked={availability.chat}
                      onChange={() => handleAvailabilityChange("chat")}
                      disabled={!isEditing}
                    />
                    Chat
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <input
                      className="w-5 h-5 accent-black"
                      type="checkbox"
                      checked={availability.phoneCall}
                      onChange={() => handleAvailabilityChange("phoneCall")}
                      disabled={!isEditing}
                    />
                    Phone Call
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <input
                      className="w-5 h-5 accent-black"
                      type="checkbox"
                      checked={availability.videoCall}
                      onChange={() => handleAvailabilityChange("videoCall")}
                      disabled={!isEditing}
                    />
                    Video Call
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-[24px] my-10 bg-white px-[40px] py-[30px]">
            <h2 className="text-[24px] mb-5 ">Contact Details</h2>
            <div className="flex flex-col gap-[24px]">
              <div className="Email ID">
                <h3 className="text-[18px] my-1">Email ID</h3>
                <div className="w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]">
                  {" "}
                  <input
                    placeholder="Mohit Asnani"
                    className="w-full outline-transparent"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name=""
                    id=""
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="Email ID">
                <h3 className="text-[18px] my-1">Phone Number </h3>
                <div className="w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]">
                  {" "}
                  <input
                    placeholder="Mohit Asnani"
                    className="w-full outline-transparent"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name=""
                    id=""
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="Email ID">
                <h3 className="text-[18px] my-1">Address </h3>
                <div className="w-full border-[1px] border-[#808080] py-2 px-3 rounded-[12px]">
                  {" "}
                  <input
                    placeholder="Listener address"
                    className="w-full outline-transparent"
                    type="text"
                    name=""
                    id=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-[25%] h-fit py-[40px] gap-[40px] flex flex-col items-center bg-white rounded-[24px]">
          <img
            className="w-[180px] h-[180px] object-cover self-center rounded-full border-2 border-black"
            src={profileImage}
            alt="Profile"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
          />

          <button
            className={`px-[16px] w-fit rounded-[8px] text-white self-center py-[12px] ${
              isEditing ? "bg-[#3A3A3A]" : "bg-[#d9d9d9]"
            }`}
            disabled={!isEditing}
            onClick={handleChangeImageClick}
          >
            Change Image
          </button>
        </div>
      </div>
      {/* Button */}

      <div className="bg-white flex justify-end border-t-[1px] py-3 border-[#808080]">
        {isEditing ? (
          <>
            <button
              className="text-[18px] mr-3 px-6 py-2 border border-[#3A3A3A] rounded-[8px]"
              type="button"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              className="text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]"
              type="button"
              onClick={handleSubmitClick}
            >
              Submit Details
            </button>
          </>
        ) : (
          <button
            className="text-[18px] text-black mr-7 px-6 py-2 bg-white border-black border-[1px] rounded-[8px]"
            type="button"
            onClick={handleEditClick}
          >
            Edit Details
          </button>
        )}
        <button
          className="text-[18px] text-white mr-7 px-6 py-2 bg-[#3A3A3A] rounded-[8px]"
          type="button"
          onClick={ApproveListner}
        >
          Approve Listener
        </button>
        {showPopup && (
          <SucessfullPopup
            text={"Upload Successfully!"}
            setShowPopup={setShowPopup}
          />
        )}
      </div>
    </>
  );
}

export default ListenerDetails;