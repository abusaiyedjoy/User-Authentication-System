import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    varifyOTP: {type: String, default: ''},
    varifyExpireOTP: {type: Number, default: 0},
    resetOTP: {type: String, default: ''},
    resetExpireOTP: {type: Number, default: 0},
    isAccountVarified: {type:Boolean, default: false}
});


const UserModel = mongoose.models.user || mongoose.model('user', UserSchema);
export default UserModel;