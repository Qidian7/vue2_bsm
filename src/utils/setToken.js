export function setToken(tokenkey, token) {
  return localStorage.setItem(tokenkey, token);
}
export function getToken(tokenkey) {
  return localStorage.getItem(tokenkey);
}
export function removeToken(tokenkey) {
  return localStorage.removeItem(tokenkey);
}
