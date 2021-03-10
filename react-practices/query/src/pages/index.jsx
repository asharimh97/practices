import { x } from "@xstyled/styled-components";
import { IoIosMegaphone } from "react-icons/io";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const handleSubmitForm = data => {
    const { keyword } = data;
    history.push(`/movies?q=${keyword}`);
  };

  return (
    <x.div
      display="flex"
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <div>
        <x.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
          <IoIosMegaphone size="28px" style={{ marginRight: "16px" }} />
          <div>
            <x.p as="h1" fontSize="xx-large" lineHeight="130%" fontWeight={700}>
              Movlie
            </x.p>
            <x.p fontSize="small" color="gray-400">
              Movie Libraries
            </x.p>
          </div>
        </x.div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <x.input
            name="keyword"
            ref={register({ required: true })}
            w={400}
            m="auto"
            border="solid 1px"
            borderColor={errors.keyword ? "red-500" : "cool-gray-500"}
            borderRadius="md"
            placeholder="Search your favorite movies"
            fontWeight="300"
            p={3}
          />
          {errors.keyword && (
            <x.p mt={2} color="red-500" fontSize="smaller">
              Keyword is required
            </x.p>
          )}
        </form>
      </div>
    </x.div>
  );
};

export default HomePage;
