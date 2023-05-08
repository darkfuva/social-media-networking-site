import CommentList, { comment } from "./sampleCommentCreator";
import {useMemo} from "react";

export type defaultPostObject = {
    postId: number
    postTitle: string,
    postText: string,
    postImage: string,
    upvotes: number,
    downvotes: number,
    comments: comment[]|null,
    shares: number
}


export default function SamplePostCreator (index: number, postId: number): defaultPostObject{
    let newPostObject: defaultPostObject = {
        postId: index,
        postTitle: "Post Title" + index,
        postText:"Post Text " + index,
        postImage:"political-social-networking/public/pexels-pixabay-34299.jpg",
        upvotes:10,
        downvotes:10,
        comments: CommentList(100,postId),
        shares: 10
    };
    return newPostObject;
}