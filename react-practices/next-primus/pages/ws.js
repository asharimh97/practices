import dynamic from "next/dynamic"
import { useEffect } from "react";
import usePrimus from "../src/hooks/usePrimus";

function WS() {
  // Jadi di next js bisa pake primus kalo :
  // 1. Di export dynamic dengan kondisi NO-SSR
  // 2. Berarti kalo mau pake njur gimana -,-
  const primus = usePrimus();

  useEffect(() => {
    primus.emit("data-baru", { data: "hmm" });
    primus.write("halo yang ada disana");
    primus.write({ data: "halololo", id: "sembarangId", foo: "barr" })
  }, []);

  
  return (
    <div>
      <p>Disini nanti ada websocket</p>
    </div>
  )
}

// export default WS;

export default dynamic(() => Promise.resolve(WS), {
  ssr: false,
  loading: () => <div>Loading...</div>
});