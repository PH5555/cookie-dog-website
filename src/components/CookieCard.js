import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const CookieCard = (props) => {
  const navigate = useNavigate();
  const { open, setMax } = props;

  const openMusicModal = () => {
    setMax(300);
    open();
  };

  return (
    <Container>
      <Image src="img/sample.png" onClick={() => navigate("/cookieDetail")} />
      <Box>
        <Cover>
          <Text type="number" onClick={() => navigate("/cookieDetail")}>
            #032
          </Text>
          <Text color="#cacaca" type="artist">
            /Dr. Ahn
          </Text>
        </Cover>
        <Image button src="img/music_play.svg" onClick={openMusicModal} />
      </Box>
      <Text type="situation">0/20</Text>
      <a href="https://opensea.io/">
        <Button>view on opensea</Button>
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: max(22.7vw, 24.5rem);
  height: auto;
  border-radius: 18px;
  background-color: #151515;
  text-align: center;
  margin-right: max(2.76vw, 2.975rem);
  margin-bottom: 7.5rem;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
`;

const Cover = styled.div`
  margin-left: 3.2rem;
  text-align: left;
  width: calc(100% - 89px);
`;

const Image = styled.img`
  cursor: pointer;
  width: ${(props) => (props.button ? "max(4.6vw, 5rem)" : "92%")};
  margin-top: ${(props) => (props.button ? "" : "4%")};
  margin-right: ${(props) => (props.button ? "2.3rem" : "")}; ;
`;

const Box = styled.div`
  margin-top: 1.5rem;
  display: flex;
`;

const TextStyles = css`
  ${(props) =>
    props.type === "number" &&
    css`
      cursor: pointer;
      font-family: "Quantico-Bold";
      font-size: max(2.08vw, 2.24rem);
    `}

  ${(props) =>
    props.type === "artist" &&
    css`
      font-size: max(1.0416vw, 1.12rem);
      font-family: "Roboto-Regular";
    `}

  ${(props) =>
    props.type === "situation" &&
    css`
      font-family: "Quantico-regular";
      margin-left: 3.2rem;
      width: 100%;
      text-align: left;
      font-size: max(1.6vw, 1.7rem);
      margin-top: 2.5rem;
    `}
`;

const Text = styled.p`
  margin: 0 auto;
  color: ${(props) => props.color || "white"};
  ${TextStyles};
`;

const Button = styled.div`
  text-decoration: none;
  line-height: max(3.792vw, 4.1rem);
  width: 100%;
  height: max(3.792vw, 4.1rem);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #292929;
  margin-top: 14px;
  color: white;
  font-size: max(1.354vw, 1.459rem);
  font-family: "Arial";
`;

export default CookieCard;
