import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, lowercase:true},
    phone_number: {type: String, required: true, unique: true},
    message: {type: String, required: true},
     businessType: {
    type: String,
    required: true,
    enum: [
      "Asset Management",
      "Hedge Fund/Specialty Asset Mgmt",
      "Private Equity/Venture Capital",
      "Investment Bank",
      "Commercial/SME/Retail/Dev Bank",
      "Brokerage",
      "Consulting/Professional Services",
      "Energy / Utility / Commodities",
      "Corporate – Non-Financial Other",
      "Market Research",
      "Other"
    ]
  }
    
}, {timestamps: true}) 


const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel