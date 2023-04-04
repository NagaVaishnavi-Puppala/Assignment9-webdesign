import { Express } from "express";
import { User } from "../models/user";


const setSuccess = (res, obj) => {
    res.status(200);
    res.json(obj);
}

// all kinds of error codes are mentioned below
const setError = (errorCode, res, next) => {
    switch(errorCode) {
        case 401:
            var err = new Error('Not Authenticated');
            res.status(401).set('WWW-Authenticate','Basic');// Request to send Authentication tag with Basic token
            next(err);
            break;
        
        case 204:
            res.status(204);
            res.json();
            break;
        
        case 400:
            var err = new Error('Bad Request');
            res.status(400);
            next(err);
            break;

        case 403:
            var err = new Error('Authentication has been Failed');
            res.status(403);
            next(err);
            break;
        
        case 404:
            var err = new Error('User ID doesnot exist');
            res.status(404);
            next(err);
            break;

        case 500:
            res.status(500);
            res.json(next);
            break;
        case 503:
            var err = "request couldnot be completed"
            res.status(503);
            res.json(next);
            break;

    }
}
// Create new user
  export const createUser = /*app.post("/user/create",*/ async (req, res) => {

    try {
  
      let user = await User.findOne({ email: req.body.email });
      let passBool, emailBool, nameBool = false;
  
      if (user) {
        res.status(400).send({ message: "Email Address already exists." });
      } else {
  
        if (validateEmail(req.body.email)) {
          // console.log("Proper email address");
          emailBool = true;
        } else {
          emailBool = false;
          res.status(400).send({ message: "Please input email address correctly!"});
        }
  
        if (checkPassword(req.body.password)) {
          passBool = true;
          // console.log("Password is correct");
        } else {
          passBool = false;
          res.status(400).send({ message: "Please input password correctly!"});
        }
  
        if (validateName(req.body.name)) {
          nameBool = true;
          // console.log("Password is correct");
        } else {
          nameBool = false;
          res.status(400).send({ message: "Please input name correctly!"});
        }
        if (passBool && emailBool) {
          const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
          const innerResult = await User.create({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name,
            user_type: req.body.user_type
          });
          res.status(201).send(innerResult);
        }   
      }    
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error Occurred!"});
    }
  
  };
  
  // Update user details


  export const updateUser = /*app.put('/user/edit'*/ async (req, res) => {
 

    const { name, password } = req.body;
  
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Update user details
    user.name = name;
    user.password = await bcrypt.hash(password, 10);
  
    try {
      await user.save();
      res.status(200).json({ message: 'User details updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  
  // Get all users
  export const getAllUsers =/*app.get("/user/getAll",*/ async (req, res) => {
    console.log("Get called");
   const users = await User.find({});
  
        users.forEach(user => delete user.password);
        const newResult = users.map(item => {
          return {
            id: item._id,
            email: item.email,
            password: item.password,
            name: item.name
          }
        })
        res.status(200).send(newResult);
        console.log('getting');
    };
    
  
  
   
  
  // Delete user
  export const deleteUser = /*app.delete("/user/delete", */async (req, res) => {
    console.log("Delete called")
    const user = await User.findOne({email: req.body.email});
  
    if (user) {
        User.findByIdAndDelete(user._id)
          .then(item => {
            if (!item) {
              res.status(404).send({
                message: `Cannot delete User with email=${user.email}. User not found!`
              });
            } else {
              res.send({
                message: `User with email id ${user.email} was deleted successfully!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete User with email=" + user.email
            });
          });
      
    } else {
      res.status(404).send({
        message: `User was not found! Please check the email address.`
      });
    }
  };

  
  //login
  export const userLogin = /*app.post("/user/login",*/ async(req,res) => {
    console.log("login called")
    let email= req.body.email;
    let Password = req.body.password;
    const user = await User.findOne({ email: req.body.email },{Password:req.body.password});
    
           if (!user) {
            res.json(`fetch failed. User not found!`)
            console.log("Fetch failed");
          } else {res.json(`fetch sucess. User  found!`)
          console.log("Fetch success");}
          
          
           
         };