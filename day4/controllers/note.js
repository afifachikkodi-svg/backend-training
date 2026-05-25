const Notebook = require("../model/note");

const createnotebook = async (req, res) => {
    try {
        const { heading, content } = req.body;

        const data = await Notebook.create({
            heading,
            content
        });

        res.json({
            message: "Notebook created successfully",
            data
        });

    } catch (error) {
        res.send(error.message);
    }
}
const getNotes=async(req,res)=>{
    try{
        const allnotebook=await Notebook.find();
    res.json({
        allnotebook
    })
    }
    catch(error){
        res.send(error,message);
    }
}
const updateNotebook=async(req,res)=>{
   try {

   const id=req.params.id
  const{name,heading}=req.body;
  const updateNotes=await Notebook.findByIdAndUpdate(
    id,{name,heading},{new:true}
  )
  if(!updateNotebook){
    return res.send("notes is not found")
  }

  res.json({
    message:"Notes updated successfully",
    updateNotes
  })

 } catch (error) {
    res.send(error.message);
 }
}   
const deleteNotebook=async(req,res) =>{
    try{
        const id=req.params.id;
    const notebook=await Notebook.findByIdAndDelete(id);
    if(!notebook){
        return res.send("notebook not found");
    }
    res.send("notes are deleted")
    }
    catch(error){
        res.send(error.message);
    }

    }



module.exports = { createnotebook,getNotes,updateNotebook,deleteNotebook};
