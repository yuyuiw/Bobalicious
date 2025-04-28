import { useNavigate } from 'react-router';
import logo from '../images/logo.png';

const OpeningPage = () => {
  const navigate = useNavigate();

  return(
    <div className="flex flex-col justify-center items-center gap-5 w-screen h-screen">
      <h1 className="text-4xl font-[Lemonada]">
        Bobalicious
      </h1>
      <img src={logo} alt="bubble tea logo" className="size-70 border-solid border-4 rounded-full"/>
      <button 
        onClick={() => navigate("/login")} 
        className="bg-[#2C2C2C] text-neutral-100 p-5 rounded-lg cursor-pointer mt-3 text-xl"
      >
        Get Started
      </button>
    </div>
  )
}
export default OpeningPage;