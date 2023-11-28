const navigate = useNavigate();

export const setToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
}

export const getToken = () => {
  const tokenString = sessionStorage.getItem("token");

  if(tokenString == "")
  {
    navigate("/pracownicy")
  }

  const userToken = JSON.parse(tokenString);

  return userToken?.accessToken;
}


export const clearToken = () => {
    sessionStorage.setItem("token", "");
}