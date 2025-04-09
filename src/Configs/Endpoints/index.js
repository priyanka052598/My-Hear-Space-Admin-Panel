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
  getBlogDetails: `${BASE_URL}blogs/`, // blogId
  updateBlog: `${BASE_URL}blogs/`, // blogId
  deleteBlog: `${BASE_URL}blogs/`, // blogId method -delete
  getDasboard: `${BASE_URL}admins/dashboard`,
  getWalletCredit: `${BASE_URL}admins/analytics/wallet-credits`,
  getMonthlyCredit: `${BASE_URL}admins/analytics/monthly-credits`,
  getListnerProfile: `${BASE_URL}admins/listener-profile/`, // + listnerID
  UpdateListnerProfile: `${BASE_URL}admins/update-listener-profile/`, // + listnerID
  approveListnerProfile: `${BASE_URL}admins/listeners/`, // + listnerID
  getListnerSessionHistory: `${BASE_URL}admins/listener-session-history/`, // + listnerID
  getBanListners: `${BASE_URL}admins/ban-listeners`,
  getDeclinedSessions: `${BASE_URL}admins/listeners/`, // + listnerID /rejections
  banListener: `${BASE_URL}admins/ban/`, // + listnerID
  createCoupon: `${BASE_URL}admins/wallet-coupon/create`,
  getAllCoupons: `${BASE_URL}admins/wallet-coupon/all`,
  deleteCoupon: `${BASE_URL}admins/wallet-coupon`, // + couponId
  updateCoupon: `${BASE_URL}admins/wallet-coupon`, // + couponId
  
  // listenerBan: `${BASE_URL}admins/listeners/`, // + listnerID
};


export default API_ENDPOINTS;