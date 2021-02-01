// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PageTitle from "../molecules/PageTitle";
import PhotoCard from "../molecules/PhotoCard";

const PeopleComponent: React.FC = () => {
  const responsiveBreakpoints = {
    320: 1,
    768: 2,
    992: 3,
    1200: 4
  };
  return (
    <>
      <PageTitle
        title="People"
        subtitle="People I have met, I adore, and I love"
      />
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={responsiveBreakpoints}>
          <Masonry gutter="24px">
            {[...new Array(12)].map((_, idx) => {
              const imageIdx = Math.floor(((Math.random() * 10) % 4) + 1);
              return (
                <PhotoCard
                  src={`/images/people-${imageIdx}.jpg`}
                  key={idx}
                  caption="Lorem ipsum dolorsit amet"
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default PeopleComponent;
