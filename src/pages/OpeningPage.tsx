import logo from '../images/logo.png';

const OpeningPage = () => {
  return(
    <div className="flex flex-col justify-center items-center gap-5 w-screen h-screen">
      <h1 className="text-3xl font-[Lemonada]">
        Bobalicious
      </h1>
      <img src={logo} alt="bubble tea logo" className="size-50 border-solid border-4 rounded-full"/>
      <button >Get Started</button>
    </div>
  )
}
export default OpeningPage;