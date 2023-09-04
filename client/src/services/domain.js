

const api = "/api/v1/";
export const END_POINTS = {
  login: `${api}auth/login`,
  signup: `${api}auth/signup`,
  forgetPassword: `${api}auth/forgot-password`,
  resetPassword: `${api}auth/reset-password`,
  singupCode: `${api}auth/confirm-signup`,
  whoami: `${api}auth/whoami`,
  users: `${api}auth/users`,
  createIssues: `${api}issues/create`,
  likeIssues: `${api}issues/like`,
  dislikeIssues: `${api}issues/dislike`,
  updateIssues: `${api}issues/updateIssues`,
  deleteIssues: `${api}issues/deleteIssues`,
  resendConfirmationCode: `${api}auth/resendConfirmationCode`,
  changePassword: `${api}auth/changePassword`
};
