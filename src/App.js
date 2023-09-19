

function App() {
  return (
    <div >
     <div className="h-[5.188rem] flex">
      <div className="flex ml-[5rem] py-[.62rem]">
        <img src="gal/1671f45dd70fcc98ccd63fd9b593b28e.png" alt="logo" />
        <img src="gal/1fdad0e29dca16618cd104e8b63219da.png" alt="notinline" />
      </div>

      <div className="ml-[7.375rem] font-semibold  text-base items-center	 flex">
          <h1>Home</h1>
        <h1 className="ml-[2.063rem]">Health conditions</h1>
          <h1 className="ml-[1.375rem] text-xl text-blue-400" >Lab tests</h1>
          <h1  className="ml-[1.375rem] ">Medicines</h1>    
      </div>

      <div className="flex items-center ml-[3rem] ">
        <div className="bg-[#00486C] rounded h-[2.188rem]">
          <h1 className=" font-normal text-white text-sm px-[1rem] py-[.31rem]">For patients</h1>
        </div>
        <div className="bg-[#00486C] rounded ml-[1rem] h-[2.188rem]">
          <h1 className=" font-normal text-white text-sm px-[1rem] py-[.31rem]">For hospitals</h1>
        </div>
      </div>

      <div className="flex items-center">
      <div className="ml-[6.875rem] w-[7.188rem] h-[2.188rem]  flex items-center  bg-[#333]">
        <div>
        <img className="h-[1.313rem] w-[1.313rem]" src="gal/ply'.png" alt="ply"/>
        </div>
        <div>
          <h1 className="font-medium	text-white text-xs">Play store</h1>
        </div>
      </div>
      </div>
      

     </div>
    </div>
  );
}

export default App;
