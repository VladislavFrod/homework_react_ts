import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { IComment } from "../models/IComment";
import { getCommentsOfPost } from "../services/api-services";
import CommentComponent from "../component/comments/CommentComponent";

const CommentPage: React.FC = () => {
    let { id } = useParams<{ id: string }>();
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        if (id) {
            getCommentsOfPost(id).then(value => setComments(value));
        }
    }, [id]);

    return (
        <div>
            {comments.map((comment: IComment) => (
                    <CommentComponent key={comment.id} comment={comment} />
                ))}
        </div>
    );
};

export default CommentPage;
