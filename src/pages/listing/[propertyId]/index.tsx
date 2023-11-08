import GuestView from "@/common/components/views/guest.view";
import { NextPageWithLayout } from "@/data/types/next-page-with-layout.types";

export interface PropertyDetailsProps {

}

const PropertyDetails: NextPageWithLayout<PropertyDetailsProps> = () => {
    return (
        <>

        </>
    );
};

PropertyDetails.getLayout = function getLayout(page: React.ReactElement) {
    return <GuestView>{page}</GuestView>;
};

export default PropertyDetails;
