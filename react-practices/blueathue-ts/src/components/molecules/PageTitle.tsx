import { Box, Text } from "../atoms";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <Box mb="64px">
      <Text fontFamily="montserrat" bold size="32px" mb="8px">
        {title}
      </Text>
      {subtitle && <Text color="gray-400">{subtitle}</Text>}
    </Box>
  );
};

export default PageTitle;
