import { commentModel } from "../../Database/Models/comment.Model.js";
import catchError from "../../Middleware/catchError.js";


let createComment = catchError( async (req, res) => {

    let comment = await commentModel.insertMany([{
        content: req.body.content,
        user: req.decoded._id,
        post: req.body.post
    }]);

    res.json({
        message: "Comment created",
        data: comment[0]  
    });
}
)


let listMyComments = catchError(async (req, res) => {

    let comments = await commentModel
        .find({ user: req.decoded._id })   
        .populate("post", "title")         
        .populate("user", "userName");    

    res.json({
        message: "My Comments",
        data: comments
    });
}
)
let updateComment = catchError(async (req, res) => {

    let comment = await commentModel.findById(req.params.id);

    if (!comment)
        return res.status(404).json({ message: "Comment not found" });

    if (!comment.user.equals(req.decoded._id))
        return res.status(403).json({ message: "Permission Denied" });

    let updated = await commentModel.findByIdAndUpdate(
        req.params.id,
        { content: req.body.content },
        { new: true }
    );

    res.json({
        message: "Comment updated",
        data: updated
    });
}
)


let deleteComment = catchError(async (req, res) => {

    let comment = await commentModel.findById(req.params.id);

    if (!comment)
        return res.status(404).json({ message: "Comment not found" });

    if (!comment.user.equals(req.decoded._id))
        return res.status(403).json({ message: "Permission Denied" });

    await commentModel.findByIdAndDelete(req.params.id);

    res.json({
        message: "Comment deleted"
    });
}
)

export {deleteComment , updateComment , createComment , listMyComments}