import useAppDispatch from "@/common/hooks/app-dispatch.hook";
import { FakeFacilities } from "@/data/mocks/facilitate";
import { setProperties } from "@/store/slice/user.slice";
import { useEffect } from "react";
import GuestNavbar from "../display/GuestNavbar";

export interface GuestViewProps {
    children: React.ReactNode;
}

const GuestView: React.FC<GuestViewProps> = (props) => {
    const { children } = props;
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setProperties(FakeFacilities))
    }, [dispatch])


    return <>
        <GuestNavbar />
        <div className="md:px-[15%] py-[5rem] font-Jost">
            <div className=" container" >
                {children}
            </div>
        </div>
    </>
};

export default GuestView;
