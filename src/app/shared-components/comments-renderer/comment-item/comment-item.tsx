import { comment } from "../../creators/sampleCommentCreator"
import styles from "./comment-item.module.scss";
import { Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
type CommentItemProps = {
    index: number,
    val: comment,
}

export default function CommentItem ({index, val}:CommentItemProps) {
    return (
        <div key={index} className={`${styles.commentListItem} secondaryColorBg`}>
        <Grid container spacing={1}>
            <Grid item sm={2} xs={2} md={1} lg={1}>
                <div className={styles.userDetailsContainer}>
                    <AccountCircleIcon></AccountCircleIcon>
                </div>

            </Grid>
            <Grid className={styles.commentContentContainer} item sm={5} xs={5} md={5} lg={5}>
                <div className={styles.usernameContainer}>
                    {val.createdBy}
                </div>
                <div className={styles.commentText}>
                    {val.commentText}
                </div>
            </Grid>
        </Grid>
    </div>
    )
}