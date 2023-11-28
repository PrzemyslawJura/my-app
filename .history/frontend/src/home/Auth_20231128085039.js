export const setToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
}

export const getToken = () => {
  const tokenString = sessionStorage.getItem("token");

  if(tokenString != "")
  {
    const userToken = JSON.parse(tokenString);
    return userToken?.accessToken;
  }

  return "Not authorized"
}

export const clearToken = () => {
    sessionStorage.setItem("token", "");
}

export const setId = (id) => {
  sessionStorage.setItem("Id", JSON.stringify(id));
}

export const getId = () => {
  const IdString = sessionStorage.getItem("Id");

  return IdString
}

export const clearId = () => {
  sessionStorage.setItem("Id", "");
}
