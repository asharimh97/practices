import { x } from "@xstyled/styled-components";
import { Box, Text } from "../atoms";
import PageTitle from "../molecules/PageTitle";

const ContactComponent: React.FC = () => {
  return (
    <>
      <PageTitle
        title="Contact"
        subtitle="If you want to get to know me better"
      />
      <Box position="relative" h="100vh" maxHeight="450px" w="100%" mb="32px">
        <x.img
          src="/images/people-2.jpg"
          alt="Gambar kontak"
          w="100%"
          height="100%"
          position="absolute"
          objectFit="cover"
          left="0"
          top="0"
        />
      </Box>
      <Text
        size={{ _: "18px", lg: "21px" }}
        mb="16px"
        height="200%"
        w={{ _: "100%", lg: "80%" }}
        mx={{ _: "0", lg: "10%" }}
      >
        Duis congue, sapien nec venenatis condimentum, mi orci faucibus est, sed
        euismod mi odio sed tellus. Proin convallis orci ut varius aliquet.
        Integer rutrum nibh leo, non pharetra ante volutpat et. Aenean sodales
        varius tortor, ac placerat mi. Cras sed consectetur mauris, in fringilla
        ligula. Donec non commodo erat, pulvinar aliquam eros. Vestibulum
        dignissim sit amet mi imperdiet fringilla. Curabitur sed lectus mi.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Text
        size={{ _: "18px", lg: "21px" }}
        mb="16px"
        height="200%"
        w={{ _: "100%", lg: "80%" }}
        mx={{ _: "0", lg: "10%" }}
      >
        In odio magna, bibendum ut ipsum id, vulputate posuere libero. Nullam ac
        velit eget purus consectetur tempor. Ut ornare pulvinar est vel
        lobortis. Cras convallis aliquet sem, non vehicula odio interdum at.
        Mauris ac arcu cursus nunc consectetur ullamcorper at sit amet leo.
        Quisque iaculis ante urna, a euismod turpis fermentum id. Quisque
        maximus felis quis tempor auctor. Proin pharetra leo sed facilisis
        viverra. Aenean nec neque pharetra, gravida elit sed, eleifend sem.
        Curabitur malesuada tortor urna. Phasellus facilisis, libero in rutrum
        venenatis, ipsum ex consequat lectus, non lacinia metus mauris sit amet
        sapien. Ut massa turpis, elementum eu risus vel, tristique sollicitudin
        nulla. Aliquam et accumsan mauris. Mauris non mi tempus, tempus enim id,
        congue dui. Sed sed laoreet ex.
      </Text>
      <Text
        size={{ _: "18px", lg: "21px" }}
        mb="16px"
        height="200%"
        w={{ _: "100%", lg: "80%" }}
        mx={{ _: "0", lg: "10%" }}
      >
        Nullam molestie orci ante, et hendrerit tellus tempus interdum.
        Suspendisse ultrices leo at massa gravida sagittis vel a risus. Nam
        ornare lacus et libero volutpat, at sollicitudin odio dapibus. Vivamus
        mauris enim, egestas et purus in, eleifend vehicula elit. Vestibulum vel
        mi sit amet nisi fermentum lobortis vitae vel urna. Donec in nunc metus.
        Praesent volutpat a diam vestibulum malesuada. Duis ut mattis leo, nec
        vulputate dolor. Maecenas lectus est, eleifend at elit non, venenatis
        convallis tellus. Donec sapien diam, feugiat eget libero nec, semper
        aliquam leo. Suspendisse in ultricies justo. Quisque dictum, tellus vel
        suscipit pretium, velit ante fermentum ipsum, id tincidunt leo lacus vel
        ligula.
      </Text>
      <Text
        size={{ _: "18px", lg: "21px" }}
        mb="16px"
        height="200%"
        w={{ _: "100%", lg: "80%" }}
        mx={{ _: "0", lg: "10%" }}
      >
        Ut eu elit vitae mi pharetra fringilla nec ultrices nibh. Phasellus
        pulvinar tortor in hendrerit rhoncus. Maecenas a fringilla augue.
        Phasellus maximus lacus magna, vel sagittis mi euismod et. Nulla
        vestibulum dui ac sem varius, at egestas purus bibendum. Duis dictum
        massa in viverra luctus. Proin sapien tellus, cursus ut erat et,
        consectetur congue dui. Vivamus rhoncus est enim, ut pretium magna
        pulvinar eu. Nullam mattis tincidunt arcu sed ornare. Sed posuere eros
        vel augue venenatis, nec ullamcorper nibh accumsan. Donec a pharetra
        enim, sit amet pharetra urna. Quisque ut euismod massa. Mauris euismod
        cursus consectetur.
      </Text>
      <Text
        size={{ _: "18px", lg: "21px" }}
        mb="16px"
        height="200%"
        w={{ _: "100%", lg: "80%" }}
        mx={{ _: "0", lg: "10%" }}
      >
        Nulla tempor vehicula venenatis. Pellentesque tincidunt arcu est, quis
        interdum nisl egestas ut. Maecenas condimentum vitae erat vel malesuada.
        In non tellus quis dui varius facilisis. Nunc id maximus sapien.
        Curabitur vel turpis at ipsum aliquam euismod. Vestibulum ac felis
        sapien. Donec eleifend venenatis tellus ullamcorper fringilla. In ornare
        condimentum dolor, eget elementum orci. Sed ut erat pellentesque, tempor
        orci eu, ullamcorper felis. Proin ut imperdiet neque. Praesent elit
        justo, faucibus non dapibus vel, condimentum sed enim. Vivamus malesuada
        risus a tempus sagittis. Ut lacinia eget metus et efficitur.
      </Text>
    </>
  );
};

export default ContactComponent;
