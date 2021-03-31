import dynamic from "next/dynamic";

const WS_URL = "http://localhost:4000";

function usePrimus() {
  const primus = Primus.connect(WS_URL);
  console.log(primus);

  return primus;
}

export default usePrimus;

// export default dynamic(() => Promise.resolve(usePrimus), {
//   ssr: false,
// });