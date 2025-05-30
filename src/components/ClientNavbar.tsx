import { useLocation } from "react-router";

const ClientNavbar = () => {
  const location = useLocation();
  
  const getNavContent = () => {
    switch (location.pathname) {
      case '/':
        return null;
      case '/login':
        return <h1>Log-In</h1>;
      case '/signup':
        return <h1>Sign-Up</h1>;
      case '/client-home':
        return <div></div>;
      case '/vendor-home':
        return <div></div>;
      default:
        return (
          <div className="underline flex justify-evenly w-full">
            <a href="/profile">Profile</a><a href="/cart">Cart</a><a href="/client-catalog">Menu</a>
          </div>
        );
    }
  };

  return(
    <>
      {location.pathname !== "/" && (
        <div className="bg-[#cbe3ba] flex flex-col items-center py-8">
          <a href="/client-home" className="text-4xl font-[Lemonada]">Bobalicious</a>
          <br/>
          <div className="flex justify-center text-2xl w-full">
          {getNavContent()}
          </div>
        </div>
      )}
    </>
  )
}
export default ClientNavbar;