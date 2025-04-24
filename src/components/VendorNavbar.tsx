const VendorNavbar = () => {
  return(
    <div className="bg-[#cbe3ba] flex flex-col items-center py-8">
      <h1 className="text-4xl font-[Lemonada]">Bobalicious</h1>
      <br/>
      <div className="flex justify-center text-2xl w-full">
        <div className="underline flex justify-evenly w-full">
          <a href="/">Analytics</a><a href="/vendor-catalog">Edit Menu</a><a href="/vendor-home">Home</a>
        </div>
      </div>
    </div>
  )
}
export default VendorNavbar;