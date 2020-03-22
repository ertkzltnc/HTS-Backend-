let router=require("express").Router();
let animalController=require("./controllers/animalController");

router.route("/animal").get(animalController.list).post(animalController.create);
router.route("/animal/:animal_id").put(animalController.update).delete(animalController.delete);

module.exports=router;