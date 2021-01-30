interface BlobProps {
  fill?: string;
  pattern?: React.ReactNode;
  [key: string]: any;
}

const Blob: React.FC<BlobProps> = ({ fill, pattern, ...props }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      {pattern}
      <path
        fill={fill}
        d="M59.2,-61.6C72.5,-46,76.1,-23,73,-3.1C69.8,16.7,60,33.4,46.7,42.7C33.4,52,16.7,53.8,-1.8,55.6C-20.3,57.4,-40.6,59.2,-55.8,49.9C-70.9,40.6,-81,20.3,-78.3,2.6C-75.7,-15,-60.4,-30,-45.2,-45.7C-30,-61.4,-15,-77.7,4,-81.7C23,-85.7,46,-77.3,59.2,-61.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

Blob.defaultProps = {
  fill: "currentColor"
};

export default Blob;
