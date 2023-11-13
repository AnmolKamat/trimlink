import mongoose from "mongoose";

const uri = process.env.MONGO_URI;
export const clg = () => console.log(uri);
mongoose.connect(uri!);

const linkSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export const linksModel =
  mongoose.models.link || mongoose.model("link", linkSchema);
