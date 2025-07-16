// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Login from 'Pages/Auth/LoginPage/Login';
// import ForgotPassword from 'Pages/Auth/ForgotPassword/ForgotPassword';
// import Dashboard from 'Pages/AllPages/Dashboard/Index';
// // import ListenerManagement from 'Pages/AllPages/ListenerManagement/Index';
// import PaymentManagement from 'Pages/AllPages/PaymentManagement/Index';
// import ListenerManagementTable from 'Pages/AllPages/ListenerManagement/Index';
// import AddNewListener from 'Pages/AllPages/ListenerManagement/AddNewListener/Index';
// import CreatedListener from 'Pages/AllPages/ListenerManagement/CreatedListener/Index';
// import PendingPayment from 'Pages/AllPages/PaymentManagement/Componenets/PendingPayment';
// import SucessfullPayment from 'Pages/AllPages/PaymentManagement/Componenets/SucessfullPayment';
// import RateManagement from 'Pages/AllPages/RateManagement/Index';
// import WalletManagement from 'Pages/AllPages/WalletManagement/Index';
// import UserDetails from 'Pages/AllPages/WalletManagement/Components/TransactionDetails';
// import MinimunWalletBalance from 'Pages/AllPages/WalletManagement/Components/MinimunWalletBalance';
// import WalletDetails from 'Pages/AllPages/WalletManagement/Components/WalletDetails';
// import UserFeedback from 'Pages/AllPages/UserFeedback/Index';
// import BlogManagement from 'Pages/AllPages/BlogManagement/Index';
// import SessionRejected from 'Pages/AllPages/SessionRejected/Index';
// import BannerManagement from 'Pages/AllPages/BannerManagement/Index';
// import AddNewBlog from 'Pages/AllPages/BlogManagement/Componenets/AddNewBlog';
// import EditBlog from 'Pages/AllPages/BlogManagement/Componenets/EditBlog';
// import { ToastContainer } from 'react-toastify';
// import CouponManagement from 'Pages/AllPages/CouponManagement/Index';






// function App() {
//   const token = localStorage.getItem("authToken");
//   // console.log(token)
//   return (
//     <>
//       <ToastContainer/>

//       <Router>
//         <Routes>
          
//             <Route path="/" element={ token?.length > 10 ? <Dashboard/> :  <Login/>}/>
//             <Route path='/Forgotpassword' element={<ForgotPassword/>} />
//             <Route path='/Dashboard' element={<Dashboard/>}/>
//             <Route path='/ListenerManagement' element={<ListenerManagementTable/>} />
//             <Route path='/PaymentManagement' element ={<PaymentManagement/>} />
//             <Route path='/ListenerManagement/AddNewListener' element={<AddNewListener/>}/>
//             <Route path='/ListenerManagement/CreatedListener' element={<CreatedListener/>} />
//             <Route path='/PaymentManagement/PendingPayment' element={<PendingPayment/>} />
//             <Route path='/PaymentManagement/SuccessfulPayment' element={<SucessfullPayment/>} />
//             <Route path='RateManagement' element={<RateManagement/>} />
//             <Route path='User&WalletDetails' element ={<WalletManagement/>} />
//             <Route path='/User&WalletDetails/UserDetails' element={<UserDetails/>} />
//             <Route path='/User&WalletDetails/MinimumWalletBalance' element={<MinimunWalletBalance/>} />
//             <Route path='/User&WalletDetails/WalletDetails' element={<WalletDetails/>}/>
//             <Route path='/UserFeedback' element={<UserFeedback/>}/>
//             <Route path='/BlogManagement' element={<BlogManagement/>}/>
//             <Route path='/SessionRejected' element={<SessionRejected/>}/>
//             <Route path='/BannerManagement' element={<BannerManagement/>}/>
//             <Route path='/BlogManagement/AddNewBlog' element={<AddNewBlog/>}/>
//             <Route path='/BlogManagement/EditBlog' element={<EditBlog/>}/>
//             <Route path="/CouponManagement" element={<CouponManagement/>}/>
//         </Routes>

//     </Router>
//     </>
//   )
// }

// export default App
import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "Pages/Auth/LoginPage/Login";
import ForgotPassword from "Pages/Auth/ForgotPassword/ForgotPassword";
import Dashboard from "Pages/AllPages/Dashboard/Index";
import PaymentManagement from "Pages/AllPages/PaymentManagement/Index";
import ListenerManagementTable from "Pages/AllPages/ListenerManagement/Index";
import AddNewListener from "Pages/AllPages/ListenerManagement/AddNewListener/Index";
import CreatedListener from "Pages/AllPages/ListenerManagement/CreatedListener/Index";
import PendingPayment from "Pages/AllPages/PaymentManagement/Componenets/PendingPayment";
import SucessfullPayment from "Pages/AllPages/PaymentManagement/Componenets/SucessfullPayment";
import RateManagement from "Pages/AllPages/RateManagement/Index";
import WalletManagement from "Pages/AllPages/WalletManagement/Index";
import UserDetails from "Pages/AllPages/WalletManagement/Components/TransactionDetails";
import MinimunWalletBalance from "Pages/AllPages/WalletManagement/Components/MinimunWalletBalance";
import WalletDetails from "Pages/AllPages/WalletManagement/Components/WalletDetails";
import UserFeedback from "Pages/AllPages/UserFeedback/Index";
import BlogManagement from "Pages/AllPages/BlogManagement/Index";
import SessionRejected from "Pages/AllPages/SessionRejected/Index";
import BannerManagement from "Pages/AllPages/BannerManagement/Index";
import AddNewBlog from "Pages/AllPages/BlogManagement/Componenets/AddNewBlog";
import EditBlog from "Pages/AllPages/BlogManagement/Componenets/EditBlog";
import { ToastContainer } from "react-toastify";
import CouponManagement from "Pages/AllPages/CouponManagement/Index";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  const isAuthenticated = token && token.length > 10;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Public Route Component (redirects to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  const isAuthenticated = token && token.length > 10;

  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(token && token.length > 10);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/forgotpassword"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />

          {/* Root route - redirect based on authentication */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/listenermanagement"
            element={
              <ProtectedRoute>
                <ListenerManagementTable />
              </ProtectedRoute>
            }
          />

          <Route
            path="/paymentmanagement"
            element={
              <ProtectedRoute>
                <PaymentManagement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/listenermanagement/addnewlistener"
            element={
              <ProtectedRoute>
                <AddNewListener />
              </ProtectedRoute>
            }
          />

          <Route
            path="/listenermanagement/createdlistener"
            element={
              <ProtectedRoute>
                <CreatedListener />
              </ProtectedRoute>
            }
          />

          <Route
            path="/paymentmanagement/pendingpayment"
            element={
              <ProtectedRoute>
                <PendingPayment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/paymentmanagement/successfulpayment"
            element={
              <ProtectedRoute>
                <SucessfullPayment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ratemanagement"
            element={
              <ProtectedRoute>
                <RateManagement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user-wallet-details"
            element={
              <ProtectedRoute>
                <WalletManagement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user-wallet-details/userdetails"
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user-wallet-details/minimumwalletbalance"
            element={
              <ProtectedRoute>
                <MinimunWalletBalance />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user-wallet-details/walletdetails"
            element={
              <ProtectedRoute>
                <WalletDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/userfeedback"
            element={
              <ProtectedRoute>
                <UserFeedback />
              </ProtectedRoute>
            }
          />

          <Route
            path="/blogmanagement"
            element={
              <ProtectedRoute>
                <BlogManagement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/sessionrejected"
            element={
              <ProtectedRoute>
                <SessionRejected />
              </ProtectedRoute>
            }
          />

          <Route
            path="/bannermanagement"
            element={
              <ProtectedRoute>
                <BannerManagement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/blogmanagement/addnewblog"
            element={
              <ProtectedRoute>
                <AddNewBlog />
              </ProtectedRoute>
            }
          />

          <Route
            path="/blogmanagement/editblog"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />

          <Route
            path="/couponmanagement"
            element={
              <ProtectedRoute>
                <CouponManagement />
              </ProtectedRoute>
            }
          />

          {/* Catch all route - redirect to login or dashboard */}
          <Route
            path="*"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
