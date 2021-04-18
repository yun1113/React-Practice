import { useSelector } from 'react-redux';

export default function User() {
  const email = useSelector((state) => state.email);

  return email ? <div>Hello, {email}.</div> : <div>Hello</div>
}
