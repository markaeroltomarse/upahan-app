import GuestView from "@/common/components/views/guest.view";
import { NextPageWithLayout } from "@/data/types/next-page-with-layout.types";
import HomPageFeature from "@/features/home/homepage.feature";

export interface HomePageProps {

}

const HomePage: NextPageWithLayout<HomePageProps> = () => {
  return (
    <>
      <HomPageFeature />
    </>
  );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <GuestView>{page}</GuestView>
};

export default HomePage;

