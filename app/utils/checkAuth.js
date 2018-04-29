import { setUser } from '../actions/userActions';

export function checkAuthorization ({ dispatch }) {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    const token = JSON.parse(storedToken);
    const created = new Date(token.created).getTime();
    const expiry = created + 1000 * 3600;
    if (new Date().getTime() > expiry) {
      return false;
    }
    dispatch(setUser(token));
    return true;
  }
  return false;
}
