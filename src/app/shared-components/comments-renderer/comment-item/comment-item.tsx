import { comment } from "../../creators/sampleCommentCreator";
import styles from "./comment-item.module.scss";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ClickableIcon from "../../clickable-icon/clickable-icon";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import SendIcon from "@mui/icons-material/Send";

type CommentItemProps = {
  index: number;
  val: comment;
};

export default function CommentItem({ index, val }: CommentItemProps) {
  return (
    <div
      key={index}
      className={`xsFontSize ${styles.commentListItem} secondaryColorBg`}
    >
      <Grid container spacing={1}>
        <Grid item sm={2} xs={2} md={1} lg={1}>
          <div className={styles.userDetailsContainer}>
            <AccountCircleIcon></AccountCircleIcon>
          </div>
        </Grid>
        <Grid
          className={styles.commentContentContainer}
          item
          sm={5}
          xs={5}
          md={5}
          lg={5}
        >
          <div className={styles.usernameContainer}>{val.createdBy}</div>
          <div className={styles.commentText}>{val.commentText}</div>
        </Grid>
      </Grid>
      <div className={styles.commentItemActionContainer}>
        <Grid item>
          <ClickableIcon
            classes={"xsFontSize"}
            showNumber={true}
            text={10}
            Icon={CommentIcon}
            action={() => {}}
          ></ClickableIcon>
        </Grid>
        <Grid item>
          <ClickableIcon
            classes={`xsFontSize tertiaryColorHoverGood`}
            showNumber={true}
            text={10}
            Icon={ThumbUpIcon}
            action={() => {}}
          ></ClickableIcon>
        </Grid>
        <Grid item>
          <ClickableIcon
            classes={"xsFontSize tertiaryColorHoverBad"}
            showNumber={true}
            text={10}
            Icon={ThumbDownIcon}
            action={() => {}}
          ></ClickableIcon>
        </Grid>
        <Grid item>
          <ClickableIcon
            classes={"xsFontSize"}
            showNumber={true}
            text={10}
            Icon={SendIcon}
            action={() => {}}
          ></ClickableIcon>
        </Grid>
      </div>
    </div>
  );
}
