const mongoose = require("mongoose");
const { Schema } = mongoose;
const { customAlphabet } = require("nanoid");
const { alphanumeric } = require("nanoid-dictionary");
const nano = customAlphabet(alphanumeric, 7);

const urlSchema = new Schema(
  {
    url: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      default: () => {
        return nano();
      },
    },
    visits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const urlModel = mongoose.model("urls", urlSchema);

module.exports = urlModel;
