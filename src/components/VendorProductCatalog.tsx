import CloseIcon from '@mui/icons-material/Close';

const VendorProductCatalog = () => {
  return(
    <>
    {/* Add onClick */}
    <button type="button" className="bg-[#2C2C2C] text-neutral-100 px-4 py-2 rounded-lg">Add Item</button>

    <h1 className="flex justify-center text-2xl"><i><b>Edit Menu</b></i></h1>

    {/* Map delete button to each menu item */}
    <button type="button" className="bg-[#2C2C2C] text-neutral-100 px-1 rounded-lg" ><CloseIcon/></button>
    </>
  )
}
export default VendorProductCatalog;