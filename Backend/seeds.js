import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/user.js'; 

mongoose.connect('mongodb://localhost:27017/Emergency-App', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const users = [
  {
    email: 'admin@example.com',
    phoneNumber: '18557338922',
    password: 'password123',
    isAdmin: true,
  },
  {
    email: 'user@example.com',
    phoneNumber: '18777804236',
    password: '',
    isAdmin: false,
  },
];

const createUsers = async () => {
  try {
    const existingUsers = await User.find();
    if (existingUsers.length === 0) {
      const salt = await bcrypt.genSalt(10);
      const userPromises = users.map(async user => {
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return new User({ ...user, password: hashedPassword }).save();
      });
      await Promise.all(userPromises);
      console.log('Database seeded!');
    } else {
      console.log('Database already has users, skipping seed.');
    }
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
};

createUsers();
