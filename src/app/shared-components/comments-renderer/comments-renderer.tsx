import { defaultPostObject } from "@/app/shared-components/creators/samplePostCreator";
import styles from "./comments-renderer.module.scss";
import { SyntheticEvent, useReducer } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UIEvent } from "react";
import CommentItem from "./comment-item/comment-item";

export default function CommentsRenderer({ currentPostObject }: { currentPostObject: defaultPostObject }) {
    const [numberOfVisibleComments, updateNumberOfVisibleComments] = useReducer((numberOfVisibleComments: number) => {
        let commentLength = currentPostObject.comments?.length || 0;
        if (numberOfVisibleComments + 3 > commentLength)
            return commentLength;
        return numberOfVisibleComments + 3;
    }, 3);
    const handleScroll = (event: SyntheticEvent<HTMLDivElement>) => {
        console.log(event)
        if(event.currentTarget.scrollTop + event.currentTarget.offsetHeight+40> event.currentTarget.scrollHeight)
            updateNumberOfVisibleComments();
    }
    const showAllComments = () => {
        updateNumberOfVisibleComments();
    }
    return (
        <div className={styles.commentSectionContainer}>
            <div className={styles.commentListContainer}>
                <div onScroll={(event)=>handleScroll(event)} className={styles.commentList}>
                    {currentPostObject.comments?.map((val, index) =>
<CommentItem key={index} index={index} val={val}></CommentItem>
).filter((val, index) => index < numberOfVisibleComments ? val : null).filter(val => val)}
                    <div onClick={showAllComments} className={styles.commentListActionsContainer}>
                        <div className={`${styles.action} tertiaryColorHover`}>
                            Show All Comments 
                            <ExpandMoreIcon></ExpandMoreIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}