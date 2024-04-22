import GuestView from "@/common/components/views/guest.view";
import useAppSelector from "@/common/hooks/app-selector.hook";
import { NextPageWithLayout } from "@/data/types/next-page-with-layout.types";

export interface PropertyDetailsProps {

}

const PropertyDetails: NextPageWithLayout<PropertyDetailsProps> = () => {
    const properties = useAppSelector(store => store.user.properties)
    return (
        <>
            {JSON.stringify(properties[0])}
        </>
    );
};

PropertyDetails.getLayout = function getLayout(page: React.ReactElement) {
    return <GuestView>{page}</GuestView>;
};

export default PropertyDetails;
