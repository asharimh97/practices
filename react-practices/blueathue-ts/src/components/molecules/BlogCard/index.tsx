import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Box, Text } from "../../atoms";
import { ImageWrapper } from "./styled";

interface BlogCardProps {
  date: Date;
  title: string;
  cover: string;
  [key: string]: any;
}

const BlogCard: React.FC<BlogCardProps> = ({
  date,
  title,
  cover,
  ...props
}) => {
  return (
    <Box>
      <Link to="/detail/blog" style={{ textDecoration: "none" }}>
        <ImageWrapper>
          <img src={cover} alt={title} />
        </ImageWrapper>
        <Text
          color="skyblue"
          bold
          uppercase
          fontFamily="montserrat"
          mb={4}
          size="14px"
          clearStyle
        >
          {format(date, "eee, d MMM yyyy")}
        </Text>
        <Text
          size={{ _: "24px", md: "20px" }}
          color="cool-gray-600"
          hoverTextDecoration="underline"
        >
          {title}
        </Text>
      </Link>
    </Box>
  );
};

export default BlogCard;
