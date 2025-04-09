import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="grid grid-cols-4 bg-sky-950 p-5">
                <h1 className="col-span-1 text-4xl text-white text-center">
                    ABC
                </h1>
                <div className="col-span-2 flex items-center text-white mt-2">
                    <Link to="/" className="pl-20 hover:text-gray-300">
                        Trang chủ
                    </Link>
                    <Link to="/menu" className="pl-10 hover:text-gray-300">
                        Thực đơn
                    </Link>
                    <Link to="/lienhe" className="pl-10 hover:text-gray-300">
                        Liên hệ
                    </Link>
                </div>
                <div className="col-span-1">
                    <button className="text-white mt-2">Book Table</button>
                </div>
            </div>
        </>
    );
}

export default Header;
