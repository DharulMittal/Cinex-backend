import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        reviewId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
            required: true
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        comment:{
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const Comment = mongoose.model("Comment",commentSchema);

export default Comment;