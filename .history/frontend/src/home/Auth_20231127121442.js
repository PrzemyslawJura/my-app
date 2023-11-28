export const setToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
}

export const getToken = () => {
  const tokenString = sessionStorage.getItem("token");

  if(tokenString)
  {
    const userToken = JSON.parse(tokenString);
    return userToken?.accessToken;
  }

  return "Not authorized"
}


export const clearToken = () => {
    sessionStorage.setItem("token", "");
}