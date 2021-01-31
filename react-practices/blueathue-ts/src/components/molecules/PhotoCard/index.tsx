import { Text } from "../../atoms";
import { Card, Image, Overlay } from "./styled";

interface PhotoCardProps {
  src: string;
  caption?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, caption, ...props }) => {
  return (
    <Card>
      <Image src={src} alt={caption} />
      <Overlay>
        <Text size="18px" height={1.35} color="white">
          {caption}
        </Text>
      </Overlay>
    </Card>
  );
};

export default PhotoCard;
