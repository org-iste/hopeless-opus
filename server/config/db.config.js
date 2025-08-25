import mongoose from 'mongoose';

const connectDB = () => {
  // Database connection logic here
  mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));    
}

export default connectDB;
