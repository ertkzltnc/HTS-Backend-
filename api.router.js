let router=require("express").Router();
let animalController=require("./controllers/animalController");
let userController=require("./controllers/userController");

router.route("/animal").get(animalController.list).post(animalController.create);
router.route("/animal/:animal_id").put(animalController.update).delete(animalController.delete);
router.route("/user").post(userController.create).get(userController.login);
module.exports=router;