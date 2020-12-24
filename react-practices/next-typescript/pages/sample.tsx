import Sample from "components/Sample";

type Prop<T> = {
  data?: T;
};

function SamplePage(prop: Prop<Record<string, any>>) {
  const sembarang = [123, 123, 123];

  console.log(sembarang);

  return (
    <div>
      <Sample />
      <p>Apaan nih gan</p>
      <p></p>
    </div>
  );
}

export default SamplePage;
