const BASE_URL = import.meta.env.VITE_SERVER_URL;

const API_ENDPOINTS = {
  BASE_URL,
  GetListnerPaymentRequests: `${BASE_URL}wallet/listener/withdrawal-requests`,
  UpdateWithdrawlRequestStatus: `${BASE_URL}admins/wallet/update-withdrawal-status`, // + listnerID  method -PUT
  getUserWallet: `${BASE_URL}wallet/user-wallets`,
  getTransactions: `${BASE_URL}wallet/transaction-details`,
  getUsersTransactions: `${BASE_URL}wallet/user-transactions/`,
  getAllBlogs: `${BASE_URL}blogs/all`,
  createBlog: `${BASE_URL}blogs//create`,
  getBlogDetails: `${BASE_URL}blogs/`,// blogId
  updateBlog: `${BASE_URL}blogs/`,// blogId
  deleteBlog: `${BASE_URL}blogs/`,// blogId method -delete
};


export default API_ENDPOINTS;