import PageTitle from "../../molecules/PageTitle";
import PhotoCard from "../../molecules/PhotoCard";

const ModeComponent: React.FC = () => {
  return (
    <>
      <PageTitle title="Mode" subtitle="What I wear for sure" />
      <div style={{ width: "375px" }}>
        <PhotoCard
          src="/images/sky.jpg"
          caption="Hujan hujan pergilah datanglah di lain hari"
        />
      </div>
    </>
  );
};

export default ModeComponent;
