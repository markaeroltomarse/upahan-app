import GoogleMapComponent from "@/common/components/display/GoogleMap";
import Button from "@/common/components/inputs/Button";
import useAppSelector from "@/common/hooks/app-selector.hook";
import { IFacilitateForRent } from "@/data/mocks/facilitate";
import { useMemo, useState } from "react";
import { BsListNested, BsMap } from "react-icons/bs";
import PropertyItem from "./PropertyItem";

export interface ListingPropertyResultProps {

}

const ListingPropertyResult: React.FC<ListingPropertyResultProps> = () => {
    const properties = useAppSelector(store => store.user.properties)
    const [isMapMode, setIsMapMode] = useState(false)
    const propertyMapped = useMemo(() => {
        // Is API Loading etc.
        if (!properties?.length) {
            return [1, 2, 3, 4, 5, 6, 8, 9].map((_, index) => {
                return <PropertyItem key={'loader-property-' + index} lazyLoading />
            })
        }

        return properties.map((property: IFacilitateForRent, i: number) => {
            return <PropertyItem key={property.coordinateDetails + '-property-' + i} item={property} />
        })
    }, [properties])

    return <div className="flex md:justify-end justify-center">
        <div className="w-[78%] pl-[1.5rem] py-[3rem] ">
            {
                isMapMode ? <div className="relative rounded-lg aspect-square overflow-hidden flex justify-center items-center">
                    <GoogleMapComponent zoom={7} center={properties[0]} markers={properties} />
                </div> : <div className="md:overflow-x-visible overflow-hidden grid md:grid-cols-4 grid-cols-2 gap-5">
                    {
                        propertyMapped
                    }
                </div>
            }

            <Button buttonAttributes={{ onClick: () => setIsMapMode(!isMapMode) }} btnType={"default"} className="z-10 transition-all text-white bg-gradient-to-r from-orange-600 to-orange-500 flex gap-3 items-center fixed bottom-10 left-[40%]">
                Show as {isMapMode ? 'List' : 'Map'} {isMapMode ? <BsListNested data-aos="fade-left" size={20} color="white" /> : <BsMap data-aos="fade-right" size={20} color="white" />}
            </Button>
        </div>
    </div>
};

export default ListingPropertyResult;
