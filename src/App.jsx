import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from 'Pages/Auth/LoginPage/Login';
import ForgotPassword from 'Pages/Auth/ForgotPassword/ForgotPassword';
import Dashboard from 'Pages/AllPages/Dashboard/Index';
// import ListenerManagement from 'Pages/AllPages/ListenerManagement/Index';
import PaymentManagement from 'Pages/AllPages/PaymentManagement/Index';
import ListenerManagementTable from 'Pages/AllPages/ListenerManagement/Index';
import AddNewListener from 'Pages/AllPages/ListenerManagement/AddNewListener/Index';
import CreatedListener from 'Pages/AllPages/ListenerManagement/CreatedListener/Index';
import PendingPayment from 'Pages/AllPages/PaymentManagement/Componenets/PendingPayment';
import SucessfullPayment from 'Pages/AllPages/PaymentManagement/Componenets/SucessfullPayment';
import RateManagement from 'Pages/AllPages/RateManagement/Index';
import WalletManagement from 'Pages/AllPages/WalletManagement/Index';
import UserDetails from 'Pages/AllPages/WalletManagement/Components/TransactionDetails';
import MinimunWalletBalance from 'Pages/AllPages/WalletManagement/Components/MinimunWalletBalance';
import WalletDetails from 'Pages/AllPages/WalletManagement/Components/WalletDetails';
import UserFeedback from 'Pages/AllPages/UserFeedback/Index';
import BlogManagement from 'Pages/AllPages/BlogManagement/Index';
import SessionRejected from 'Pages/AllPages/SessionRejected/Index';
import BannerManagement from 'Pages/AllPages/BannerManagement/Index';
import AddNewBlog from 'Pages/AllPages/BlogManagement/Componenets/AddNewBlog';
import EditBlog from 'Pages/AllPages/BlogManagement/Componenets/EditBlog';
import { ToastContainer } from 'react-toastify';






function App() {

  return (
    <>
      <ToastContainer/>

      <Router>
        <Routes>
          
            <Route path="/" element={<Login/>}/>
            <Route path='/Forgotpassword' element={<ForgotPassword/>} />
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/ListenerManagement' element={<ListenerManagementTable/>} />
            <Route path='/PaymentManagement' element ={<PaymentManagement/>} />
            <Route path='/ListenerManagement/AddNewListener' element={<AddNewListener/>}/>
            <Route path='/ListenerManagement/CreatedListener' element={<CreatedListener/>} />
            <Route path='/PaymentManagement/PendingPayment' element={<PendingPayment/>} />
            <Route path='/PaymentManagement/SuccessfulPayment' element={<SucessfullPayment/>} />
            <Route path='RateManagement' element={<RateManagement/>} />
            <Route path='User&WalletDetails' element ={<WalletManagement/>} />
            <Route path='/User&WalletDetails/UserDetails' element={<UserDetails/>} />
            <Route path='/User&WalletDetails/MinimumWalletBalance' element={<MinimunWalletBalance/>} />
            <Route path='/User&WalletDetails/WalletDetails' element={<WalletDetails/>}/>
            <Route path='/UserFeedback' element={<UserFeedback/>}/>
            <Route path='/BlogManagement' element={<BlogManagement/>}/>
            <Route path='/SessionRejected' element={<SessionRejected/>}/>
            <Route path='/BannerManagement' element={<BannerManagement/>}/>
            <Route path='/BlogManagement/AddNewBlog' element={<AddNewBlog/>}/>
            <Route path='/BlogManagement/EditBlog' element={<EditBlog/>}/>
        </Routes>

    </Router>
    </>
  )
}

export default App
