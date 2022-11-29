// const Comment =  require('../models/Comment')
// const cloudinary = require("../middleware/cloudinary");
// const Post =  require('../models/Post')
// module.exports = {
//     getComment: async (req, res) => {
//         try {
//             const post = await Post.findById(req.params.id)
//             const comment = await Comment.find({postId: req.params.id}).sort({ createdAt: "desc" }).lean();
//             res.render('comment.ejs', {post: post, user: req.user, comment: comment})
//         } catch (error) {
//             console.log(error)
//         }
//     },
//     createComment: async (req, res) => {
//         try {
//             const post = await Post.findById({ _id: req.params.id})
//             const comment = await Comment.create({
//                 comment: req.body.comment,
//                 likes: 0,
//                 postId: req.params.id,
//                 userId: req.user.id,
//                 user: req.user.userName, 
//             })
//             console.log("comment is created")
//             res.redirect(`/post/${req.params.id}`)
//         } catch (error) {
//             console.log(error)
//         }
//     },
//     deleteComment: async (req, res) => {
//         console.log(req.body)
//         try {
//             await Comment.remove({_id: req.params.id})
//             console.log('Deleted Comment')
//             console.log(req.body)

//             res.redirect(`/profile`)

//         } catch (error) {
//             console.log(error)
//         }
//     }
// }