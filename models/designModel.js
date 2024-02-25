import mongoose, { Schema } from "mongoose";

const designSchema = new Schema({
    style: String,
    data: Buffer,
    contentType: String,
    artist: String,
    location: String,
    artist_instagram: String,
});

const Design = mongoose.models.Design || mongoose.model("Design", designSchema);

export default Design;
