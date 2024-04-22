import Card from '@/common/components/display/Card';
import Button from '@/common/components/inputs/Button';
import Input from '@/common/components/inputs/Input';
import useAppSelector from '@/common/hooks/app-selector.hook';
import useCurrentLocationService from '@/common/hooks/location.hook';
import useMediaQuery from '@/common/hooks/media-query.hook';
import { fetchLatLngInfos } from '@/common/utils/google-map-api.util';
import { setListingFilter } from '@/store/slice/global.slice';
import { useEffect, useState } from 'react';
import { AiFillFilter, AiOutlineClose, AiOutlineFilter } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { RiPinDistanceLine } from 'react-icons/ri';
import NumberRangePicker from '../../../common/components/inputs/NumberRangePicker';
import LocationFinderModal from './LocationFinderModal';
export interface ListingFilterProps {

}

const ListingFilter: React.FC<ListingFilterProps> = () => {
    const isMobile = useMediaQuery('(max-width:640px)');
    const filter = useAppSelector(store => store.globalSlice?.listingFilter)
    const [isSetFindingLocation, setIsFindingLocation] = useState(false)
    const [filterVisible, setFilterVisible] = useState(false)

    const { getMyLocation } = useCurrentLocationService()

    const handleGetCoordinateDetails = (data: any) => {
        setListingFilter({
            ...filter,
            location: {
                ...data,
                name: ''
            }
        })
        setIsFindingLocation(false)
    }

    useEffect(() => {
        if (filter?.location?.lat === 0 && filter?.location?.lat === 0 && !filter?.location?.name) {
            getMyLocation(async (coords) => {
                const result = await Promise.all(fetchLatLngInfos([coords]))
                setListingFilter((filter: any) => {
                    return {
                        ...filter,
                        location: {
                            ...filter.location,
                            ...coords,
                            name: result[0] as string,
                        }
                    }
                });
            })
        } else if (!filter?.location?.name) {
            const load = async () => {
                const result = await Promise.all(fetchLatLngInfos([filter?.location]))
                setListingFilter((filter: any) => {
                    return {
                        ...filter,
                        location: {
                            ...filter?.location,
                            name: result[0] as string
                        }
                    }
                });
            }
            load()
        }

        // if (filter?.location?.lat !== 0 && filter?.location?.lat !== 0) {
        //     dispatch(setProperties(getNearbyProperties(FakeFacilities, {
        //         lat: filter?.location?.lat,
        //         lng: filter?.location?.lng
        //     }, 10)))
        // }

    }, [filter?.location]);

    return <>
        <LocationFinderModal
            isOpen={isSetFindingLocation}
            onSelectLocation={handleGetCoordinateDetails}
            center={{
                lat: filter?.location.lat,
                lng: filter?.location.lng
            }}
            onClose={() => setIsFindingLocation(false)}
        />
        <Button buttonAttributes={{
            onClick: () => {
                setFilterVisible(!filterVisible)
            }
        }} btnType={'default'} size='sm' className={`${filterVisible ? 'z-20' : 'z-30'} rounded-full  fixed top-[12%] left-2 flex gap-3 items-center justify-center text-white bg-gradient-to-r from-orange-600 to-orange-500 md:hidden`} >
            <AiOutlineFilter size={20} color='white' />
        </Button>
        <Card
            isLoading
            data-aos={!isMobile ? 'fade-right' : ''}
            className={`border-[#e67e22] border-r md:overflow-x-auto md:w-[15%] bg-[#f2f2f2] z-20 w-0 overflow-x-hidden flex flex-col gap-3  py-[3rem] pr-[2rem] h-[100vh] fixed  tracking-[0.50px] ${filterVisible && 'w-[70vw] px-[1rem]'}`}
        >
            <div className={`md:opacity-100 opacity-0 transition-all transa flex flex-col gap-2 ${filterVisible && 'opacity-100'}`}>
                <div className='flex gap-1 items-center'>
                    <IoLocationOutline size={20} color='#d35400' /> <span>Location / Kilometer</span>
                </div>
                <div className='pl-[1.5rem] grid grid-cols-5 gap-3'>
                    <Input
                        className='w-full col-span-3'
                        inputAttribute={{
                            className: "text-sm text-[#d35400]",
                            placeholder: 'Select near location..',
                            defaultValue: filter?.location?.name,
                            onFocus: () => {
                                setIsFindingLocation(true)
                            }
                        }}
                    />

                    <Input className='w-full col-span-2' inputAttribute={{
                        className: "text-sm text-[#d35400]",
                        placeholder: 'Near Km',
                        defaultValue: filter?.location?.km,
                        type: 'number'
                    }} leftIcon={<RiPinDistanceLine size={20} color='#d35400' />} />
                </div>
            </div>
            <br />
            <div className={`md:opacity-100 opacity-0 transition-all flex flex-col gap-2 ${filterVisible && 'opacity-100'}`}>
                <div className='flex gap-1 items-center'>
                    <AiOutlineFilter size={20} color='#d35400' /> <span>Filter</span>
                </div>

                <div className='pl-[1.5rem] flex flex-col gap-3'>
                    <NumberRangePicker onChange={(minMax: number[]) => {
                        setListingFilter({
                            ...filter,
                            bill: {
                                minBill: minMax[0],
                                maxBill: minMax[1],
                            }
                        })
                    }} />

                    <div className='flex flex-col gap-2'>
                        <small>Payment Due Date</small>
                        <div className='flex gap-3'>
                            <Input className='w-[20px] h-[20px] aspect-square' inputAttribute={{ onChange: (e) => { setListingFilter({ ...filter, [e.target.name]: e.target.value }) }, value: 'monthly', type: 'radio', className: 'accent-orange-500 aspect-square', name: 'paymentDueDate' }} />
                            <small className='text-[#2c3e50]'>Monthly</small>
                        </div>
                        <div className='flex gap-3'>
                            <Input className='w-[20px] h-[20px] aspect-square' inputAttribute={{ onChange: (e) => { setListingFilter({ ...filter, [e.target.name]: e.target.value }) }, value: 'half-month', type: 'radio', className: 'accent-orange-500 aspect-square', name: 'paymentDueDate' }} />
                            <small className='text-[#2c3e50]'>Half of Month</small>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <small>Utility</small>
                        {
                            Object.keys(filter?.utility).map(util => <>
                                <div className='flex gap-3'>
                                    <Input className='w-[20px] h-[20px] aspect-square' inputAttribute={{ onClick: (e) => { setListingFilter({ ...filter, utility: { ...(filter?.utility), [e.currentTarget.name]: e.currentTarget.checked } }) }, type: 'checkbox', className: 'accent-orange-500 aspect-square', name: util.toLowerCase() }} />
                                    <small className='text-[#2c3e50]'>{util.toUpperCase()}</small>
                                </div>
                            </>)
                        }
                    </div>
                    <hr />

                    <Button btnType='default' size='sm' className='flex gap-3 items-center justify-center text-white bg-gradient-to-r from-orange-600 to-orange-500' buttonAttributes={{
                        onClick: () => {

                        }
                    }}>
                        <span>Submit Filter</span> <AiFillFilter size={20} color='white' />
                    </Button>

                    <Button btnType='default' size='sm' className='md:hidden flex gap-3 items-center justify-center ' buttonAttributes={{
                        onClick: () => {
                            setFilterVisible(false)
                        }
                    }}>
                        <span>Close</span> <AiOutlineClose size={20} color='#2c3e50' />
                    </Button>
                </div>
            </div>
        </Card >
    </>
};

export default ListingFilter;
