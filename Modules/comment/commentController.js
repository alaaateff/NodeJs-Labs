import { commentModel } from "../../Database/Models/commentModel.js";

let createComment = async (req, res) => {
        let decoded = req.decoded;
        let newComment = await commentModel.insertMany({
            content: req.body.content,
            userId: decoded._id,
            postId: req.body.postId
        });

        res.json({
            message: "Comment created",
            data: newComment
        });
    } 

let deleteComment = async (req, res) => {
     let id = req.params.id;
     let decoded = req.decoded
     let mycomment = await commentModel.findOneAndDelete({
            _id: id,
            userId: decoded._id
        });

        if (!mycomment) {
            return res.status(403).json({
                message: "This comment doesn't belong to you"
            });
        }

        res.json({
            message: "Comment deleted"
        });
    }

let myComments = async (req, res) => {
        let decoded = req.decoded
        let mycomments = await commentModel
            .find({ userId: decoded._id })
            .populate("postId", "title");

        res.json({
            message: "My Comments",
            data: mycomments
        });

    }

let updatecomment = async (req, res) => {
        let id = req.params.id;
        let decoded = req.decoded;
        let updatedComment = await commentModel.findOneAndUpdate(
            {
                _id: id,
                userId: decoded._id
            },
            { content: req.body.content },
            { new: true }
        );

        if (!updatedComment) {
            return res.status(403).json({
                message: "This comment doesn't belong to you"
            });
        }

        res.json({
            message: "Comment updated",
            data: updatedComment
        });

    } 

export {createComment, deleteComment, myComments , updatecomment}