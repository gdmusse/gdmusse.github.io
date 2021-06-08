import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import {
  PostCardContainer,
  PostCardContent,
  LeftContent,
  RightContent,
} from "./styled";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";

const PostCard = (props) => {
  return (
    <PostCardContainer>
      <PostCardContent>
        <LeftContent>
          <IconButton size="small" onClick={props.onClickUpvote}>
            {props.userVoteDirection > 0 && (
              <ArrowUpwardIcon style={{ color: green[500] }} />
            )}
            {props.userVoteDirection <= 0 && <ArrowUpwardIcon />}
          </IconButton>
          <Typography align="center" variant="h6">
            {props.votesCount}
          </Typography>
          <IconButton size="small" onClick={props.onClickDownvote}>
            {props.userVoteDirection >= 0 && <ArrowDownwardIcon />}
            {props.userVoteDirection < 0 && (
              <ArrowDownwardIcon style={{ color: red[500] }} />
            )}
          </IconButton>
        </LeftContent>
        <CardActionArea>
          <RightContent onClick={props.onClickCard}>
            <Typography gutterBottom variant="h4">
              {props.title}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {props.text}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              by {props.username} at {props.createdAt}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.commentsCount} comments
            </Typography>
          </RightContent>
        </CardActionArea>
      </PostCardContent>
    </PostCardContainer>
  );
};

export default PostCard;
