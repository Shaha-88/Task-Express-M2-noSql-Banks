const{model,Schema }= require("mangoose");


const AccountSchema = newAccount({

    name:String,
    id:Number,
});


module.exports=model("Account",AccountSchema);