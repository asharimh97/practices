import { randomDate } from "../../utils/helpers";
import { Grid } from "../atoms";
import BlogCard from "../molecules/BlogCard";
import PageTitle from "../molecules/PageTitle";

const PeopleComponent: React.FC = () => {
  return (
    <>
      <PageTitle
        title="People"
        subtitle="People I have met, I adore, and I love"
      />
      <Grid
        column={{
          _: "repeat(1, 1fr)",
          md: "repeat(1, 2fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)"
        }}
        gap="24px"
      >
        {[...new Array(12)].map((_, idx) => {
          const imageIdx = Math.floor(((Math.random() * 10) % 4) + 1);
          const blogDate = randomDate(new Date(2018, 0, 1), new Date());
          return (
            <BlogCard
              title="Lorem Ipsum dolorsit Amet"
              date={blogDate}
              cover={`/images/people-${imageIdx}.jpg`}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default PeopleComponent;
