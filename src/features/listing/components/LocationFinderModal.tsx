import GoogleMapComponent from "@/common/components/display/GoogleMap";
import Modal from "@/common/components/display/Modal";
import Button from "@/common/components/inputs/Button";
import { useState } from "react";
import { TbLocationSearch } from 'react-icons/tb';
export interface LocationFinderModalProps {
    center: google.maps.LatLng | google.maps.LatLngLiteral
    isOpen?: boolean,
    onSelectLocation?: (data: any) => void
    onClose?: () => void
}

const LocationFinderModal: React.FC<LocationFinderModalProps> = (props) => {
    const { center, isOpen, onSelectLocation, onClose } = props;
    const [selectedLocation, setSelectedLocation] = useState<null | google.maps.LatLng | google.maps.LatLngLiteral>(null)
    return <>
        <Modal isOpen={isOpen} onClose={onClose} cardClass="md:w-[30vw] w-[90vw] p-[3rem]">
            <div className="w-full overflow-hidden flex items-center justify-center aspect-auto h-[30vh] rounded-md mb-[1rem]">
                {center && <>
                    <GoogleMapComponent
                        center={{
                            mapData: center,
                        }}
                        isSelecting
                        onSelectedOnMap={(data: any) => {
                            setSelectedLocation?.({
                                lat: data.lat(),
                                lng: data.lng()
                            })
                        }} />
                </>}
            </div>

            <div className="flex gap-3">
                <Button buttonAttributes={{
                    onClick: () => {
                        onSelectLocation?.(selectedLocation)
                    }
                }} btnType='default' className='!bg-[#d35400] w-full flex gap-3 justify-center items-center text-white'>
                    <span>Select this location </span>
                    <TbLocationSearch color='white' size={25} />
                </Button>
            </div>
        </Modal>
    </>
};

export default LocationFinderModal;
