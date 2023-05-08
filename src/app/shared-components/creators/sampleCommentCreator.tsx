
export type comment = {
    commentText?: string,
    createdOn?: Date,
    createdBy?: string,
    upvotes?: number,
    downvotes?: number, 
    postId: number
    comment?: comment[]
}

export function Comment(comment:comment|null = null, tempIndex: number|null = null): comment{
    let sampleComment: comment = {
        commentText: comment?.commentText||"commentText " + comment?.postId,
        createdOn: comment?.createdOn||new Date(),
        createdBy: comment?.createdBy||"createdBy",
        downvotes: comment?.downvotes||10,
        upvotes: comment?.upvotes||15,
        postId: comment?.postId||10,
        comment: []
    }


    return sampleComment
}

export default function CommentList(length: number, postId: number) : Array<comment> {
    return [...new Array(length)].map((val, index)=>Comment({postId}, index))
}