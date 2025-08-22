import db from "../models/index.js";
import CRUDService from "../services/crudService.js";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("---------------> data:" + data);
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let getFindAllCrud = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("findAllUser.ejs", { datalist: data });
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("Post crud to server");
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    return res.render("editUser.ejs", { data: userData });
  } else {
    return res.send("get data fail");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let data1 = await CRUDService.updateUser(data);

  return res.render("findAllUser.ejs", { datalist: data1 });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("Deleted sucessfully");
  } else {
    return res.send("User not found");
  }
};

export default {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  getEditCRUD,
  getFindAllCrud,
  putCRUD,
  deleteCRUD,
};
