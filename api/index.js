import  express  from "express";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";
import sendEmail from "./routes/send-email.js"
import multer from 'multer';
import { createTransport } from 'nodemailer';
import cors from "cors";
import paypal from "@paypal/checkout-server-sdk"


const app = express()

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now()+file.originalname)
  }
})
const upload = multer({ storage });

// create a transporter object for sending emails
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'ifox.text.test@gmail.com',
    pass: 'voxyowdzrfllqcxy'
  }
});

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file; 
  res.status(200).json(file.filename)
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.set('Access-Control-Allow-Credentials', 'true');
    next();
  });

  const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
app.use(cors(corsOptions));  

app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/send-email', sendEmail);


// Set up PayPal client ID and secret
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';

// Set up PayPal environment
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

// Set up a route to handle PayPal payments
app.post('/api/paypal', async (req, res) => {
  try {
    // Get the order ID from the client-side
    const orderID = req.body.orderID;

    // Call PayPal API to capture the payment
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});
    const response = await client.execute(request);

    // Check if the payment was successful
    if (response.statusCode === 201) {
      // Return a success response to the client-side
      return res.json({ success: true });
    } else {
      // Return an error response to the client-side
      return res.json({ success: false });
    }
  } catch (error) {
    // Handle any errors and return an error response to the client-side
    console.log(error);
    return res.json({ success: false });
  }
});


app.listen(8800,()=>{
    console.log("Connected!")
})