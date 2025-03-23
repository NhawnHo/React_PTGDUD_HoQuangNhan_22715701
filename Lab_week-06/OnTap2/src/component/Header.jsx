
function Header(){

    return (
        <>
            <div className="grid grid-cols-4 bg-sky-950 p-3" >
                <h1 className="col-span-1 text-4xl text-white text-center">ABC</h1> 
                <div className=" col-span-2 flex item-center text-white mt-2  ">
                    <p className="pl-20">Trang chu</p>
                    <p className="pl-10">Thuc don</p>
                    <p className="pl-10">Lien he</p>
                </div>
                <div className="col-span-1">
                <button className="text-white mt-2 ">Book Table</button>
                </div>
            </div>
        </>
    )
}
export default Header