let router=require("express").Router();
let animalController=require("./controllers/animalController");
let userController=require("./controllers/userController");
let herdController=require("./controllers/herdController");
let speciesController=require("./controllers/speciesController");


router.route("/animal").get(animalController.list).post(animalController.create);
router.route("/animal/:animal_id").put(animalController.update).delete(animalController.delete);
router.route("/user").post(userController.create).get(userController.login);
router.route("/herd").get(herdController.list).post(herdController.create);
router.route("/herd/:herd_id").put(herdController.update).delete(herdController.delete);
router.route("/species").get(speciesController.list).post(speciesController.create);
router.route("/species/:species_id").put(speciesController.update).delete(speciesController.delete);
module.exports=router;