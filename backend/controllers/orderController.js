import Order from "../models/Order.js";
import Product from "../models/Product.js";
import stripe from 'stripe'

// Place Order COD : /api/order/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    

    if (!address || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    // Calculate Amount Using Items
    let amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return (await acc) + product.offerPrice * item.quantity;
    }, 0);

    // Add Tax Charge (2%)
    amount += Math.floor(amount * 0.02);

    // Create Order and store result
    const newOrder = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
    });

    res
      .status(201)
      .json({
        success: true,
        message: "Order placed successfully",
        order: newOrder,
      });
  } catch (error) {
    console.error("Error placing COD order:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Place Order Stripe : /api/order/stripe
export const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    const {origin} = req.headers;

    if (!address || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    let productData = [];

    // Calculate Amount Using Items
    let amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      productData.push({
        name:product.name,
        price:product.offerPrice,
        quantity:item.quantity,
      });
      return (await acc) + product.offerPrice * item.quantity;
    }, 0)

    // Add Tax Charge (2%)
    amount += Math.floor(amount * 0.02);

    // Create Order and store result
    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "Online",
    });

//  Stripe Gateway Initialize
const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

// create line items for stripe

const line_items = productData.map(()=>{
  return {
    price_data:{
      currency:"usd",
      product_data:{
        name:items.name,
      },
      unit_amount: Math.floor(items.price + items.price * 0.02) * 100
    },
    quantity: items.quantity,
  }
})

// create session

const session = await stripeInstance.checkout.sessions.create({
  line_items,
  mode:"payment",
  success_url:`${origin}/loader?next=my-orders`,
  cancel_url: `${origin}/cart`,
  metadata:{
    orderId: order._id.toString(),
    userId,
  }
})

  return res.json({success:true,url:session.url});
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};


// Get Orders by User ID : /api/order/user

export const getUserOrders = async (req, res) => {
 
    try {
      const { userId } = req.body;
      const orders = await Order.find({
        userId,
        $or: [{ paymentType: "COD" }, { isPaid: true }]
      })
      .populate("items.product address")
      .sort({ createdAt: -1 });

      
  
      res.json({ success: true, orders });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  };

//   Get All orders (for seller / admin) : /api/order/seller

export const getAllOrders = async (req, res) => {
    try {
      const orders  = await Order.find({
        $or: [{ paymentType: "COD" }, { isPaid: true }]
      })
      .populate("items.product address")
  
      res.json({ success: true, orders });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  };