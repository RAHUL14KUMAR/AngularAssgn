const mongoose=require("mongoose");
const schema=mongoose.Schema;

const employeeSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    role:{
        type:String,
    }
})
module.exports=mongoose.model("employees",employeeSchema);