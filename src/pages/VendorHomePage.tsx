import { Link } from "react-router";
import Navbar from "../components/Navbar";

const VendorHomePage = () => {
  return(
    <>
    <Navbar />
    {/* Remove these when you're making your own buttons */}
    <Link to="/">analytics</Link> - there's actually no analytics page yet (this goes to home page)
    <br/>
    <Link to="/client-catalog">menu</Link> - this goes to client catalog rn. the client catalog with product overlay must be completed first before vendor catalog can be done
    <br/>
    <Link to="/">sign out</Link> - this also goes to home page; handle this as a button to logout
    </>
  )
}
export default VendorHomePage;