const {Router}= require("express")

const router =Router()

const {createStory,getStories,getStory, updateStory,deleteStory}=require("../controllers/stories.controller")
const ProtectAuth= require("../midileware/protectAuth")

router.post('/', ProtectAuth, createStory)
router.get("/", getStories)
router.get("/:id",getStory)
router.put("/:id", ProtectAuth, updateStory);
router.delete("/:id", ProtectAuth, deleteStory);

module.exports=router