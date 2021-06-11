const express = require('express');
const { rawListeners } = require('../models/blogs');
const router = express.Router();
const Blog = require('../models/blogs');

async function getBlog(req,res,next){
    try{
blog = await Blog.findById(req.params.id)
if(blog == null ){
    return res.status(404).json({message:"Cannot find blog"});
}
    }
    catch (err){
return res.status(500).json({message:err.message})
    }
res.blog = blog
next();
}

// Getting All
router.get('/', async (req,res)=>{
try{
const blogs = await Blog.find()
res.json(blogs)
}
catch (err){ 
     res.status(500).json({message: err.message})
}
});
// Getting One
router.get('/:id', getBlog,(req,res)=>{

res.json(res.blog);
});


// Creating One

router.post('/',async (req,res)=>{
const blog = new Blog({
    author: req.body.author,
    content: req.body.content
     
})
try{
const newBlog = await blog.save()
res.status(201).json(newBlog)
}
catch (err) {
    res.status(400).json({message:err.message})
}

});
// Updating one
router.patch('/:id',getBlog,async (req,res)=>{
if (req.body.author != null){
    res.blog.author = req.body.author
}
if(req.body.content != null){
    res.blog.content = req.body.content
}
try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
} catch (err){
    res.status(400).json({message: err.message});
}
});

//Deleting one

router.delete('/:id',getBlog, async (req,res)=>{
try {
    await res.blog.remove()
    res.json({message:'Deleted Post'})
} catch (err){
    res.status(500).json({message: err.message});
}

});


module.exports = router