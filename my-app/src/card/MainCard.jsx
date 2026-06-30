import Name from "./Name";
import Achive from "./Achive";
import Image from "./Image";
import Badge from "./badge";
import Designation from "./designation";

const MainCard = ({ user }) => {
  return (
    <div className="card">
      <Badge badge={user.badge || "new"} />
      <Image image={user.image} />
      <Name name={user.name} />
      <Achive achievement={user.achievement} />
      <Designation des={user.des} />
    </div>
  );
};

export default MainCard;
