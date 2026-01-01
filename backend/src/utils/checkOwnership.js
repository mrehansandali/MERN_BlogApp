export const checkOwnership = (resourceUserId, loggedInUser) => {
  if (loggedInUser.role === "admin" || resourceUserId.toString() === loggedInUser._id.toString()) {
    return true;
  }
  return false;
};
