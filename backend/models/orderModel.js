import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: [
      {
        name: { type: String, requierd: true },
        qty: { type: Number, requierd: true },
        image: { type: String, requierd: true },
        price: { type: Number, requierd: true },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, requierd: true },
      address: { type: String, requierd: true },
      city: { type: String, requierd: true },
      postalCode: { type: String, requierd: true },
      country: { type: String, requierd: true },
    },
    paymentMethod: { type: String, requierd: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number, requierd: true, default: 0.0 },
    taxPrice: { type: Number, requierd: true, default: 0.0 },
    shippingPrice: { type: Number, requierd: true, default: 0.0 },
    totalPrice: { type: Number, requierd: true, default: 0.0 },
    isPaid: { type: Boolean, requierd: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, requierd: true, default: false },
    deliveredAt: { type: Date },
  },
  { timestamps: true },
);

const Oreder = model("Oreder", orderSchema);

export default Oreder;
