"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import SamplePostCreator from "../shared-components/creators/samplePostCreator";
import styles from "./social-feed.module.scss";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import SendIcon from "@mui/icons-material/Send";
import ClickableIcon from "../shared-components/clickable-icon/clickable-icon";
import CommentsRenderer from "../shared-components/comments-renderer/comments-renderer";
import { useCallback, useEffect, useState } from "react";

export default function SocialFeed() {
  const randomNumber = useCallback(() => Math.floor(Math.random() * 100), []);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const showComments = () => {
    console.log("clicked");
  };
  return (
    <div className={styles.socialFeed}>
      <div className="scrollbox">
      <div className={`${styles.postList} scrollbox-content`}>
        {[...new Array(10)].map((val, index) => {
          let currentPostObject = SamplePostCreator(index, randomNumber());
          return (
            <div key={index} className={`${styles.postListWrapper}`}>
              <Card className={styles.postCard} variant="outlined">
                <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {currentPostObject.postTitle}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {currentPostObject.postText}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <img src="/pexels-pixabay-34299.jpg"></img>
                  </Typography>
                  <div className={`${styles.actionContainerWrapper}`}>
                    <div
                      className={`borderPrimaryColor ${styles.actionsContainer}`}
                    >
                      <ClickableIcon
                        showNumber={true}
                        text={currentPostObject.comments?.length}
                        Icon={CommentIcon}
                        action={showComments}
                      ></ClickableIcon>
                      <ClickableIcon
                        classes={`tertiaryColorHoverGood`}
                        showNumber={true}
                        text={currentPostObject.upvotes}
                        Icon={ThumbUpIcon}
                        action={showComments}
                      ></ClickableIcon>
                      <ClickableIcon
                        classes={"tertiaryColorHoverBad"}
                        showNumber={true}
                        text={currentPostObject.downvotes}
                        Icon={ThumbDownIcon}
                        action={showComments}
                      ></ClickableIcon>
                      <ClickableIcon
                        showNumber={true}
                        text={currentPostObject.shares}
                        Icon={SendIcon}
                        action={showComments}
                      ></ClickableIcon>
                    </div>
                  </div>
                  <CommentsRenderer
                    currentPostObject={currentPostObject}
                  ></CommentsRenderer>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
