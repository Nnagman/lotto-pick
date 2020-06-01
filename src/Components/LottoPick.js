import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextareaAutosize from "react-autosize-textarea";
import FatText from "./FatText";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "./Icons";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  user-select: none;
  margin-bottom: 25px;
  a {
    color: inherit;
  }
`;

const Text = "hi";

export default () => {
  return (
    <Post>
      <FatText text={Text} />
    </Post>
  );
};
