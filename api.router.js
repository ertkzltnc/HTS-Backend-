const router=require("express").Router();
const animalController=require("./controllers/animalController");
const userController=require("./controllers/userController");
const herdController=require("./controllers/herdController");
const speciesController=require("./controllers/speciesController");
const {check}=require("express-validator");

var userValidator=new Array(
    [check("UserName").notEmpty().withMessage(" username bos olamaz!"),
    check("Password").notEmpty().withMessage("sifre bos olamaz")]);

router.route("/animal").get(animalController.list).post([check("EarID").notEmpty().withMessage("EarID bos olamaz!")],animalController.create);
router.route("/animal/:animal_id").put([check("EarID").notEmpty().withMessage("EarID bos olamaz!")],animalController.update).delete(animalController.delete).get(animalController.getById);
router.route("/animal/herd/:herd_id").get(animalController.listByHerdId);
router.route("/animal/species/:species_id").get(animalController.listBySpeciesId);
router.route("/user").post([userValidator],userController.create).get(userController.login);
router.route("/herd").get(herdController.list).post([check("Name").notEmpty().withMessage("name bos olamaz!")],herdController.create);
router.route("/herd/:herd_id").put([check("Name").notEmpty().withMessage("name bos olamaz!")],herdController.update).delete(herdController.delete).get(herdController.getById);
router.route("/species").get(speciesController.list).post([check("Name").notEmpty().withMessage("name bos olamaz!")],speciesController.create);
router.route("/species/:species_id").put([check("Name").notEmpty().withMessage("name bos olamaz!")],speciesController.update).delete(speciesController.delete).get(speciesController.getById);
module.exports=router;