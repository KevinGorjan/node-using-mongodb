import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  name:  {type: String, required: 'Enter a product name'},
  description:  {type: String, required: 'Enter a product description'},
  category: String,
  created_date: { type: Date, default: Date.now },
  price: Number
});
