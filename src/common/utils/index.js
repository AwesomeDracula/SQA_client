export const getToken = () => {
  return localStorage.getItem('token');
}

export const addToken = (token) => {
  localStorage.setItem('token', token);
}