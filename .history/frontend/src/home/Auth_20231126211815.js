export const setToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
}