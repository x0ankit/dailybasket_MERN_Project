import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({

  name: {
    type:String,required:true
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  cartItems:{
    type:Object,default:{}
  }
},{minimize:false});

const User = mongoose.models.User || mongoose.model('user',userSchema)

export default User;