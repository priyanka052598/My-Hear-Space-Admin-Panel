import images from 'assets';
import React, { useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState("");
    const[emailError,setEmailError]=useState("");
    const[password,setPassword]=useState("");
    const[passwordError,setPasswordError]=useState("");
    const[isFormValid, setIsFormValid]=useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate=useNavigate()

    // Create a masked version of the password using *
    const maskedPassword = "*".repeat(password.length);

    const validateForm = ()=> {
        let valid =true;

        // Email validation
  const emailRegex = /^(?=.*[a-z])[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const gmailRegex = /@gmail\.com$/;

    if (!email) {
        setEmailError('');
        valid = false;
      } 
      else if (!emailRegex.test(email)) {
        setEmailError('Incorrect ID');
        valid = false;
      } 
      else if (!gmailRegex.test(email)) {
        setEmailError('Incorrect ID');
        valid = false;
      }
      else {
        setEmailError('');
      }

       // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!password) {
    setPasswordError('');
    valid = false;
  } else if (!passwordRegex.test(password)) {
    setPasswordError(
      'Incorrect Password'
    );
    valid = false;
  } else {
    setPasswordError('');
  }

      return valid;
    }

    useEffect(() => {
      
    setIsFormValid(validateForm())
    
    }, [email,password])
    

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        if (validateForm()) {
          console.log('Login successful with:', { email, password });
          // Handle login logic here (e.g., API call)
        }
      };


  return (
    <div className="relative h-screen flex  bg-[#F0F0F0]">
      {/* Left Section */}
      <div className="left w-[40%] font-sans h-full relative">
        <img
          className="absolute w-full h-full object-cover"
          src={images.bg1}
          alt=""
        />
        
        {/* Content */}
        <div className=" flex pt-20 flex-col items-center h-full relative z-10">
          <img className="logo w-[158px] mb-6" src={images.hearspacelogo} alt="" />
          <div className="text flex flex-col justify-center items-center">
            <span className="text-[30px] text-[#878787]">Welcome to</span>
            <h1 className="text-[48px] text-[#ffffff]">Admin Panel!</h1>
          </div>
        </div>

        {/* Base Image */}
        <img
          className="absolute w-full h-[250px] bottom-0 "
          src={images.bg2}
          alt=""
        />
      </div>
      <div className="right w-[40%] mx-auto px-12    flex flex-col justify-center  my-20 rounded-[24px]  bg-white">
        <form  onSubmit={handleSubmit} className="login">
            <h1 className='text-[40px] font-semibold text-center text-black'>Login</h1>
            <div className="inputs mb-20  my-[35px]">
                <div className="email h-[100px] mb-5">
                    <label  className='text-[18px] '>Email ID</label>
                    <input id='email' type="text" placeholder='Enter email ID' value={email} onChange={(e)=>setEmail(e.target.value)}  className=' w-full bg-transparent outline-none  px-4 h-[50px] border-[2px] rounded-[12px] border[#808080]' />
                    {emailError && ( <span className="text-red-500 text-[14px]">{emailError}</span>)}
                </div>
                <div className="password  h-[100px] relative ">
                    <label  className='font-medium text-[18px]'>Password  ID</label>
                    <input id='password' type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} className=' w-full bg-transparent outline-none  px-4 h-[50px] border-[2px] rounded-[12px] border[#808080]'  />
                    {passwordError && (<span className="text-red-500 text-[14px]">{passwordError}</span>)}
                    <Link to="/Forgotpassword" >
                    <span className='font-extralight cursor-pointer text-[20px] absolute top-[100px] transform -translate-y-1/2 right-0'>Forgot Paswword?</span>

                    </Link>
                </div>
            </div>
            <Link to="Dashboard" className="btn">
                <button type='submit' className={` ${email && password ?  "bg-[#3A3A3A] text-white cursor-pointer"
                                    : "bg-[#D9D9D9] text-white cursor-not-allowed" }bg-[#D9D9D9] h-[50px] rounded-[12px] w-full`} >Login</button>
            </Link>
        </form>

      </div>
    </div>
  );
}

export default Login;






// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

// const Login = () => {
//   const [showTransactionMapping, setShowTransactionMapping] = useState(false);
//   const [uploadSectionVisible, setUploadSectionVisible] = useState(true);
//   const[document,setDocument]=useState();
//   const [transactionList, setTransactionList] = useState([
//     { id: 1, date: '2025-01-01', description: 'Office Supplies', amount: '$150.00', ledger: 'Office Expenses' },
//     { id: 2, date: '2025-01-02', description: 'Internet Bill', amount: '$80.00', ledger: 'Utilities' },
//   ]);

//   const handleUploadClick = () => {
//     setUploadSectionVisible(false);
//     setShowTransactionMapping(true);
//   };

//   const handleSubmitToQuickbooks = () => {
//     alert('Transactions have been successfully sent to QuickBooks.');
//     setShowTransactionMapping(false);
//     setUploadSectionVisible(true);
//   };
// console.log("document",document)
// const handleSendToAI = async () => {
//   if (!document) {
//     alert('Please upload a file first.');
//     return;
//   }

//   const formData = new FormData();
//   formData.append('file', document);

//   try {
//     const response = await fetch('http://localhost:5000/upload', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await response.json();
//     if (response.ok) {
//       alert(data.message);
//       console.log("data",data )
//       setDocument(null); // Reset after successful upload
//     } else {
//       alert('Error: ' + data.message);
//     }
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     alert('Failed to upload file.');
//   }
// };

  
  
  
  


//   const handleViewStatement = (month) => {
//     alert('Viewing the statement for ' + month + '.');
//   };

//   const handleDownloadStatement = (month) => {
//     alert('Starting download for the ' + month + ' statement.');
//   };

//   const handleSendToLedger = (month) => {
//     alert('Sending ' + month + ' statement to Ledger.');
//   };

//   return (
//     <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}>
//       <div className="header" style={{ backgroundColor: '#0056b3', color: '#fff', padding: '20px', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
//         <h1>Statement Processing Application</h1>
//       </div>

//       <div className="content" style={{ flex: 1, paddingBottom: '20px' }}>
//         {uploadSectionVisible && (
//           <div id="uploadSection">
//             <label htmlFor="bankStatement" className="form-label">Upload your bank statement:</label>
//             {/* <input
//             value={document}
//             onChange={(e)=>{
//               console.log(e.target.value,"document")

//               if (e.target.value.endsWith(".xls"||".xlsx")) {
//               setDocument(e.target.value)
                
//               }
            
//             }}
//               className="form-control"
//               type="file"
//               id="bankStatement"
//               accept=".xls,.xlsx" // Only allows Excel files
//             /> */}

// <input
//   // value={document}
//   onChange={(e) => {
//     const file = e.target.files[0]; // Get the uploaded file
//     if (file) {
//       const fileName = file.name;
//       const fileExtension = fileName.split('.').pop().toLowerCase(); // Extract file extension
//       if (fileExtension === 'xls' || fileExtension === 'xlsx') {

//         setDocument(file); // Set document if the file is valid
//         // alert(`Your Excel file "${fileName}" has been successfully uploaded.`);

//       } else {
//         alert('Please upload only Excel files (.xls or .xlsx)');
//         // e.target.value = ""; // Reset input if invalid file is selected
//       }
//     }
//   }}
//   className="form-control"
//   type="file"
//   id="bankStatement"
//   accept=".xls,.xlsx" // Restrict file type at input level
// />
//             <div id="uploadHelp" className="form-text">
//               Upload an Excel file of your bank statement.
//             </div>
//             <button  className="btn btn-primary mt-3" onClick={handleSendToAI}>
//               Send to AI
//             </button>
//             <div style={{ display: 'flex', alignItems: 'center'}}>
//             <table className="table" style={{ marginTop: '20px', textAlign: 'center', width: '100%' }}>
//             <thead className='border-b-2 border-black'>
//                 <tr>
//                   <th>Statement Month</th>
//                   <th>Year</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {['October', 'November', 'December'].map((month, idx) => (
//                   <tr style={{ verticalAlign: 'middle' }} key={idx}>
//                     <td >{month} Statement</td>
//                     <td>2024</td>
//                     <td>{month === 'November' ? 'In Progress' : 'Booked'}</td>
//                     <td>
//                       <button className="btn btn-info mr-2" onClick={() => handleViewStatement(month)}>View</button>
//                       <button className="btn btn-success mr-2" onClick={() => handleDownloadStatement(month)}>Download</button>
//                       <button className="btn btn-warning" onClick={() => handleSendToLedger(month)}>Send to Ledger</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             </div>
//           </div>
//         )}

//         {showTransactionMapping && (
//           <div id="transactionMappingSection">
//             <h2>AI Transaction Mapping</h2>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Date</th>
//                   <th>Description</th>
//                   <th>Amount</th>
//                   <th>Mapped Ledger</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactionList.map((transaction) => (
//                   <tr key={transaction.id}>
//                     <td>{transaction.id}</td>
//                     <td>{transaction.date}</td>
//                     <td>{transaction.description}</td>
//                     <td>{transaction.amount}</td>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={transaction.ledger}
//                         onChange={(e) => {
//                           const updatedTransactions = transactionList.map((t) =>
//                             t.id === transaction.id ? { ...t, ledger: e.target.value } : t
//                           );
//                           setTransactionList(updatedTransactions);
//                         }}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button className="btn btn-success" onClick={handleSubmitToQuickbooks}>Send to Quickbooks</button>
//           </div>
//         )}
//       </div>

//       <div className="footer" style={{ padding: '10px', backgroundColor: '#212529', color: '#fff', textAlign: 'center' }}>
//         <p>2025 © Your Company Name</p>
//       </div>

//       {/* Modal */}
//       <div className="modal fade" id="quickbooksModal" tabIndex="-1" aria-labelledby="quickbooksModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="quickbooksModalLabel">Success</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               Transactions have been successfully sent to QuickBooks.
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;