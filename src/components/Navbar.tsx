import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  
  const getNavContent = () => {
    switch (location.pathname) {
      case '/login':
        return <h1>Log In</h1>;
      case '/signup':
        return <h1>Sign Up</h1>;
      case '/home':
        return <div></div>;
      default:
        return <div><a href="/">Home</a> | <a href="/edit-menu">Edit Menu</a> | <a href="/analytics">Analytics</a></div>;
    }
  };

  return(
    <div>
      <h1>Boblicious</h1>
      {getNavContent()}
    </div>
  )
}
export default Navbar;