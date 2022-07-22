import "./CookieDogTeam.css";
import Box from "../components/TeamDescripitionBox";

const CookieDogTeam = () => {
  const members = [
    { name: "Rodney", role: "Founder & Graphic Designer" },
    { name: "Dr. Ahn", role: "KPOP producer" },
    { name: "Mute Hoon", role: "KPOP producer" },
    { name: "Joohyun", role: "Project Designer" },
    { name: "Hydra", role: "Blockchain Developer" },
    { name: "Sano", role: "Blockchain Developer" },
    { name: "Eric Choi", role: "Community Manager" },
    { name: "Donghyun", role: "Front End Developer" },
    { name: "Mina", role: "KPOP A&R / Marketer" },
    { name: "Soojung", role: "Web3 Artist/ Singer Songwrier" },
    { name: "DanBi", role: "Singer/ Model" },
  ];

  return (
    <div className="Team-Description">
      <div className="Title">COOKIEDOG Team</div>
      <div className="Detail">
        The core team consists of music producers, artists, and blockchain
        engineers with rich experience and networks
        <br /> in the K-Pop industry. We will revolutionize the entertainment
        industry by establishing a new system of participation and compensation.
      </div>
      <div className="Team-List">
        {members.map((member, i) => (
          <Box
            img={`img/member_${i + 1}.png`}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
};

export default CookieDogTeam;
