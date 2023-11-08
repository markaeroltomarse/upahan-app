import Button from "@/common/components/inputs/Button";
import { FakeFacilitiesThumbnail, IFacilitateForRent } from "@/data/mocks/facilitate";
import Image from "next/image";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { TbCurrencyPeso } from "react-icons/tb";
import SwipeableViews from 'react-swipeable-views';
export interface PropertyItemProps {
    item?: IFacilitateForRent,
    lazyLoading?: boolean
}

const PropertyItem: React.FC<PropertyItemProps> = (props) => {
    const { item, lazyLoading } = props;

    const [showCarouselButton, setShowCarouselButton] = useState(false)
    const [activeThumbnail, setActiveThumbnail] = useState(Number(item?.id) - 1 || 0)

    const handleThumbnailChange = (newValue: number) => {
        if (newValue >= 0 && newValue <= FakeFacilitiesThumbnail.length - 1) {
            setActiveThumbnail(newValue)
        }
    }

    if (lazyLoading) {
        return (
            <div className="!z-10 flex flex-col gap-3 cursor-pointer">
                <div className="rounded-lg relative aspect-square bg-gradient-to-r from-gray-200 to-gray-300 animate-gradient">
                    {/* Your gradient animation will happen here */}
                </div>

                <div className="pb-[1rem] flex flex-col gap-3">
                    <h4 className="rounded-lg p-[1.3rem] w-full bg-gradient-to-r from-gray-200 to-gray-300 animate-gradient"></h4>
                    <div className="rounded-lg w-[70%] bg-gradient-to-r from-gray-200 to-gray-300 animate-gradient p-[0.8rem]"></div>
                    <div className="rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 animate-gradient"></div>
                </div>
            </div>
        );
    }



    return <>
        <div tabIndex={0} onMouseOver={() => setShowCarouselButton(true)} onMouseOut={() => setShowCarouselButton(false)} data-aos="fade-up" className=" !z-10 flex flex-col gap-3 cursor-pointer">
            <div className="relative aspect-square">
                {
                    showCarouselButton && <>
                        <Button buttonAttributes={{ onClick: () => handleThumbnailChange(activeThumbnail - 1) }} btnType="default" size="sm" className="rounded-full !p-1 bg-gradient-to-r from-orange-600 to-orange-500 absolute left-1 top-[45%] z-10">
                            <GrFormPrevious size={20} />
                        </Button>

                        <Button buttonAttributes={{ onClick: () => handleThumbnailChange(activeThumbnail + 1) }} btnType="default" size="sm" className="rounded-full !p-1 bg-gradient-to-r from-orange-600 to-orange-500 absolute right-1 top-[45%] z-10">
                            <GrFormNext size={20} />
                        </Button>
                    </>
                }

                <div className="z-10 hidden md:flex transition-all absolute bottom-0 left-0 justify-center py-3 gap-1 w-full">
                    {
                        FakeFacilitiesThumbnail.map((_, index) => <span key={item?.coordinateDetails + '-dots-' + index} className={`rounded-full p-[3px] bg-white ${activeThumbnail === index && 'scale-150 bg-gradient-to-r from-orange-600 to-orange-500'}`}></span>)
                    }
                </div>

                <SwipeableViews className="rounded-lg" axis="x" index={activeThumbnail}
                >
                    {
                        FakeFacilitiesThumbnail.map((image, index) => (
                            <div key={index} className="z-0 shadow-sm relative aspect-square border rounded-lg bg-[#fff]">
                                <Image
                                    src={image || 'https://a0.muscache.com/im/pictures/79e16a2f-26e8-4c94-82b8-ceb87ea88da3.jpg?im_w=720'}
                                    fill
                                    priority
                                    alt=""
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        ))
                    }
                </SwipeableViews >
            </div>

            <div className="pb-[1rem]">
                <h4 className="text-[#2c3e50] ">{item?.title}</h4>
                <small className="opacity-60">
                    {item?.coordinateDetails}
                </small>
                <div className="flex gap-1">
                    <p className="flex items-center text-[#e67e22] font-semibold">
                        <TbCurrencyPeso color="#e67e22" size={20} /> {item?.pricePerMonth?.toLocaleString()}
                    </p>

                    <span className="opacity-50">Monthly</span>
                </div>
            </div>
        </div>
    </>;
};

export default PropertyItem;
