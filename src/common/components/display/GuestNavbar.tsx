import Link from "next/link";
import { useState } from "react";
import { BsHouseCheckFill } from 'react-icons/bs';
import Button from "../inputs/Button";
export interface GuestNavbarProps {

}

const GuestNavbar: React.FC<GuestNavbarProps> = () => {
    const [navigations, _] = useState([
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'About Us',
            path: '/'
        },
        {
            label: 'Updates',
            path: '/'
        },
    ])
    return <nav className="md:px-[15%] font-Jost fixed top-0 left-0 w-full z-30 bg-white  border-b-2 border-[#e67e22] shadow-sm">
        <div className="container flex justify-between py-[1.5rem] px-[1.5rem] md:px-0 items-center">
            <div className="flex items-center gap-1 text-[2rem]">
                <BsHouseCheckFill size={30} color="#e67e22" />
                <label className="font-Thunder mt-1">
                    <span className="text-[#e67e22]">UPAHAN</span>
                    <span className="text-[#2c3e50]">APP</span>
                </label>
            </div>

            <div className="flex gap-[1rem]">
                <Button className="rounded-md font-bold tracking-[0.42px" size="xs" btnType={"link"}>Login</Button>
                <Link href={'/signup'}>
                    <Button className="rounded-md font-bold tracking-[0.42px] bg-gradient-to-r from-orange-600 to-orange-500 text-orange-50" size="xs" btnType={"default"}>
                        Be a Rentor
                    </Button>
                </Link>
            </div>
        </div>
    </nav>;
};

export default GuestNavbar;
