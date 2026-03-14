import userModel from "../models/userModel.js";

export const submitHandler = async (req, res) => {
  try {
    const { name, email, phoneNumber, message, businessType } = req.body;

    if (!name || !email || !phoneNumber || !message || !businessType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await userModel.create({
      name,
      email,
      phone_number: phoneNumber,
      message,
      businessType
    });

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      user
    });

  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "This email or phone number has already been submitted" });
    }
    return res.status(500).json({ message: "Server Error" });
  }
};
