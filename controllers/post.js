const cloudinary = require("../middleware/cloudinary");
const Post =  require('../models/Post')
const Comment =  require('../models/Comment')

module.exports = {
    getProfile: async (req, res) => {
        try {
            const post = await Post.find({user: req.user.id});
            res.render('profile.ejs', {post: post, user: req.user })
        } catch (error) {
            console.log(error)
        }
    },
    getFeed: async (req, res) => {
        try {
            const post = await Post.find().sort({ createdAt: "desc" }).lean();
            res.render('feed.ejs', {post: post, user: req.user})
        } catch (error) {
            console.log(error)
        }
    },
    getPost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id)
            const comment = await Comment.find({postId: req.params.id}).sort({ createdAt: "desc" }).lean();
            res.render('post.ejs', {post: post, user: req.user, comment: comment})
        } catch (error) {
            console.log(error)
        }
    },
    createPost: async (req, res) => {
        try {
             // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            await Post.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                caption: req.body.caption,
                likes: 0,
                user: req.user.id,
                userName: req.user.userName
            });
            console.log("Post has been added!");
            res.redirect("/profile");
        } catch (error) {
            console.log(error)
        }
    },
    likePost: async (req, res) => {
        try {
            await Post.findOneAndUpdate(
                {_id: req.params.id},
                {
                    $inc: { likes: 1 },
                })
                console.log("Likes +1")
                res.redirect(`/post/${req.params.id}`)
        } catch (error) {
            console.log(error)
        }
    },
    deletePost: async (req, res) => {
        try {
            // Find post by id
           let post = await Post.findById({ _id: req.params.id })
      
           // Delete image from cloudinary
           await cloudinary.uploader.destroy(post.cloudinaryId);
           
           // Delete post from db
           await Post.remove({ _id: req.params.id})
           console.log("Deleted Post");
           res.redirect('/profile')
        } catch (error) {
            res.redirect('/profile')
        }
    }
}