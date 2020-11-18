import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { border } from "styled-system";
import { convertNumberToPixel, handleErrorImage } from "utils/helpers";
import { BaseProp } from "./Base";
import Box from "./Box";

const ROUND_RADIUS = "12px";

type ImageProp = BaseProp &
  Pick<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
    rounded?: boolean;
    fullRounded?: boolean;
    autofit?: boolean;
    // this type to handle unlisted props
    [key: string]: any;
  };

const rounded = (props: ImageProp) =>
  props.rounded && { borderRadius: ROUND_RADIUS };

const fullRounded = (props: ImageProp) =>
  props.fullRounded && {
    borderRadius: `calc(${convertNumberToPixel(props.height)} / 2)`
  };

const Img = styled(Box).attrs<ImageProp>({
  as: "img"
})<ImageProp>`
  display: block;
  ${rounded}
  ${fullRounded}
`;

const Wrapper = styled(Box)<ImageProp>`
  position: relative;
  ${rounded}
  ${fullRounded}
`;

const ImgFit = styled("img")<ImageProp>`
  object-position: center;
  object-fit: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  ${border}
  ${rounded}
  ${fullRounded}
`;

const Image: React.FC<ImageProp> = ({ alt, src = "", autofit, ...props }) => {
  if (/.svg$/i.test(src))
    return (
      <Wrapper {...props}>
        <ReactSVG
          src={src}
          beforeInjection={(svg: Record<string, any>) => {
            svg.style = "width: 100%; height: auto;";
          }}
          fallback={() => <Image src="/image-placeholder.jpg" {...props} />}
          loading={() => <div>Loading...</div>}
          wrapper="span"
        />
      </Wrapper>
    );

  if (autofit)
    return (
      <Wrapper {...props}>
        <ImgFit src={src} alt={alt} {...props} onError={handleErrorImage} />
      </Wrapper>
    );

  return <Img src={src} alt={alt} {...props} onError={handleErrorImage} />;
};

Image.displayName = "Image";

export default Image;
