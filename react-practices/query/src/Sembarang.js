import { useQuery } from "react-query"

function Sembarang() {
  const { data, isSuccess } = useQuery('getPlanets');

  if (isSuccess) {
    console.log({ data, accessedFrom: "Sembarang" });
  }

  return <div />
}

export default Sembarang;