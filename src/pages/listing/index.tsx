import GuestView from "@/common/components/views/guest.view";
import { NextPageWithLayout } from "@/data/types/next-page-with-layout.types";
import ListingFeature from "@/features/listing/listing.feature";

export interface ListingPageProps {

}

type IndexPageRef = React.ForwardedRef<HTMLDivElement>
const ListingPage: NextPageWithLayout<ListingPageProps> = (_, ref: IndexPageRef) => {
    return (
        <>
            <ListingFeature />
        </>
    );
};

ListingPage.getLayout = function getLayout(page: React.ReactElement) {
    return <GuestView>{page}</GuestView>;
};
export default ListingPage;
