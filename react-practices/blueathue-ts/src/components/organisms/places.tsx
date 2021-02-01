// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PageTitle from "../molecules/PageTitle";
import PhotoCard from "../molecules/PhotoCard";

const PlacesComponent: React.FC = () => {
  const responsiveBreakpoints = {
    320: 1,
    768: 2,
    992: 3,
    1200: 4
  };
  return (
    <>
      <PageTitle
        title="Places"
        subtitle="Places I want to visit and I have visited"
      />
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={responsiveBreakpoints}>
          <Masonry gutter="24px">
            {[...new Array(12)].map((_, idx) => {
              const imageIdx = Math.floor(((Math.random() * 10) % 7) + 1);
              return (
                <PhotoCard
                  src={`/images/place-${imageIdx}.png`}
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

export default PlacesComponent;
