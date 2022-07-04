import React from "react";
import styled, { css } from "styled-components";

const TeamDescriptionBox = (props) => {
  const { img, name, role } = props;
  return (
    <Container>
      <Image src={img} />
      <ProfileBox>
        <Text name>{name}</Text>
        <Text>{role}</Text>
      </ProfileBox>
    </Container>
  );
};

const Container = styled.div`
  width: calc((100% - 19.7rem - 15.6rem) / 4);
  margin-right: 5.2rem;
  margin-bottom: 4rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 1.1rem;
`;

const ProfileBox = styled.div`
  margin-left: 1.4rem;
`;

const Text = styled.div`
  color: white;
  font-size: 1.7rem;
  margin-top: 0.6rem;
  ${(props) =>
    props.name &&
    css`
      font-family: "Rockwell";
      font-size: 2.3rem;
      margin-top: 1.2rem;
    `}
`;

export default TeamDescriptionBox;
