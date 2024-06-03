
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="fixed w-full mx-auto z-10 bg-black mt-20">
            <ul className="list-none p-0 m-0 w-full flex flex-row items-center mx-auto" style={{width: '1240px'}}>
                <li className="inline-block">
                    <Link className="inline-block font-semibold text-sm py-4 px-6 text-gray-400 hover:text-white">HYBRID</Link>
                </li>
                <li className="inline-block">
                    <Link className="inline-block font-semibold text-sm py-4 px-6 text-gray-400 hover:text-white">TSS</Link>
                </li>
                <li className="inline-block">
                    <Link className="inline-block font-semibold text-sm py-4 px-6 text-gray-400 hover:text-white">TNGA</Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav;
