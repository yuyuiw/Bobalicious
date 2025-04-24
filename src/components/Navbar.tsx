import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  
  const getNavContent = () => {
    switch (location.pathname) {
      case '/':
        return null;
      case '/login':
        return <h1>Log-In</h1>;
      case '/signup':
        return <h1>Sign-Up</h1>;
      case '/home':
        return <div></div>;
      default:
        return (
          <div>
            <a href="/">Home</a> | <a href="/edit-menu">Edit Menu</a> | <a href="/analytics">Analytics</a>
          </div>
        );
    }
  };

  return(
    <>
      {location.pathname !== "/" && (
        <div className="bg-[#cbe3ba] flex flex-col items-center py-12">
          <h1 className="text-4xl font-[Lemonada]">Bobalicious</h1>
          <div className="text-2xl">
          {getNavContent()}
          </div>
        </div>
      )}
    </>
  )
}
export default Navbar;