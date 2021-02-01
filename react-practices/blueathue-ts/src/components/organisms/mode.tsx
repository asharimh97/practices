// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PageTitle from "../molecules/PageTitle";
import PhotoCard from "../molecules/PhotoCard";

const ModeComponent: React.FC = () => {
  const responsiveBreakpoints = {
    320: 1,
    768: 2,
    992: 3,
    1200: 4
  };
  return (
    <>
      <PageTitle title="Mode" subtitle="What I wear for sure" />
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={responsiveBreakpoints}>
          <Masonry gutter="24px">
            {[...new Array(12)].map((_, idx) => {
              const imageIdx = Math.floor(((Math.random() * 10) % 4) + 1);
              return (
                <PhotoCard
                  src={`/images/outfit-${imageIdx}.jpg`}
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

export default ModeComponent;
