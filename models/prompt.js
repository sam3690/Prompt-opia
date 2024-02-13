import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is Require!'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is Require!'],
    },
});

const Prompt = models.Prompt || model('Prompt', promptSchema);

export default Prompt;