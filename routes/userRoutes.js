import express from "express"
import { login, addUser, gettingAllUsers, updateUser, deleteUser } from "../controllers/userCtrl.js";

//router onject
const router = express.Router();

router.post("/login", login);  // login  
router.post("/adduser", addUser);  //adding user 
router.get('/getting-users-list', gettingAllUsers)  // getting all list of users
router.put('/update-user/:id', updateUser)     // updating  user
router.delete('/delete-user/:id', deleteUser)  //deleting  user 




export default router