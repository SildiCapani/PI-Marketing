import { db } from "../db.js";
import jwt  from "jsonwebtoken";

export const getPosts = (req, res) => {
    const q =  "SELECT * FROM posts";
    db.query(q, [req.query.title], (err,data)=>{
        if(err) return res.status(500).send(err)

        return res.status(200).json(data);
    })
}

export const getPost = (req, res) => {
    const q = "SELECT * FROM companies JOIN posts WHERE id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
}

export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
    

    jwt.verify(token, "jwtkey", (err) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO posts(`title`, `position`, `email`, `cname`, `web`,  `tel`, `city`, `logo`, `date`, `desc`, `req`, `res`, `about`, `type` ,`cid`) VALUES (?)";

    const file = req.file

    const values = [
      req.body.title,
      req.body.position,
      req.body.email,
      req.body.company,
      req.body.web,
      req.body.tel,
      req.body.city,
      file.filename,
      req.body.date,
      req.body.desc,
      req.body.req,
      req.body.res,
      req.body.about,
      req.body.type,
      1,
    ]; console.log(values)

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been created.");
      });
});
}

export const deletePost = (req, res) => {
    
    const token = req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token,"jwtkey", (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid!")

        const postId = req.params.id
        const q = "DELETE FROM posts WHERE `id` = ? AND `cid` = ?"

        db.query(q, [postId, userInfo.id], (err,data)=>{
            if(err) return res.status(403).json("You can delete only your post!");

            return res.json("Post has been deleted!");
        })
    })
}

export const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
    

    jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "UPDATE posts SET `title`=?, `position`=?, `email`=?, `cname`=?, `web`=?,  `tel`=?, `city`=?,  `desc`=?, `req`=?, `res`=?, `about`=?, `type`=? WHERE `id` = ? AND `cid`= ?";

    const postId= req.params.id

    const values = [
      req.body.title,
      req.body.position,
      req.body.email,
      req.body.company,
      req.body.web,
      req.body.tel,
      req.body.city,

      req.body.desc,
      req.body.req,
      req.body.res,
      req.body.about,
      req.body.type
    ]; 

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been updated.");
      });
});
}