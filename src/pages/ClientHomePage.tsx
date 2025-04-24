import { Link } from "react-router";
import Navbar from "../components/ClientNavbar";

const ClientHomePage = () => {
  return(
    <>
    <Navbar />
    {/* Remove these when you're making your own buttons */}
    <Link to="/cart">cart</Link><br/>
    <Link to="/client-catalog">menu</Link><br/>
    <Link to="/profile">profile</Link>
    </>
  )
}
export default ClientHomePage;