import { useNavigate } from "react-router-dom";



export const setToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
}

export const getToken = () => {
  const navigate = useNavigate();
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