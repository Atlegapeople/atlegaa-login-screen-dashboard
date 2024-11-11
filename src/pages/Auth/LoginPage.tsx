import Navbar from '../../components/layout/Navbar';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Navbar /> {/* Renders the navigation bar at the top */}
      <LoginForm />
    </>
  );
}