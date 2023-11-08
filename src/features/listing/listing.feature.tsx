import ListingFilter from "./components/ListingFilter";
import ListingPropertyResult from "./components/ListingPropertyResult";

export interface ListingFeatureProps {

}

const ListingFeature: React.FC<ListingFeatureProps> = () => {
    return <div className="">
        <ListingFilter />
        <ListingPropertyResult />
    </div>;
};

export default ListingFeature;
