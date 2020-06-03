import React from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
//import TextareaAutosize from "react-autosize-textarea";
import FatText from "./FatText";
//import { HeartFull, HeartEmpty, Comment as CommentIcon } from "./Icons";
import RandomNum from "../GetRandomNum";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  min-height: 40vh;
  font-size: 80px;
  text-align: center;
  user-select: none;
  margin-bottom: 25px;
  a {
    color: inherit;
  }
`;

const Title = "오늘의 로또번호는!";
const Number = RandomNum(6, 45);

export default () => {
  return (
    <Post>
      <FatText text={Title} />
      <br />
      <FatText text={Number} />
    </Post>
  );
};
