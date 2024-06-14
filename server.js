const express = require('express');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const progressRoutes = require('./routes/progress');
const sequelize = require('./config/config');

const app = express();

app.use(express.json());

app.use('/', authRoutes);
app.use('/courses', courseRoutes);
app.use('/', progressRoutes);

app.get("/", async(req,res)=>{
  try{
    res.status(200).send('Welcome To Home Page')
  }catch(err){
    res.status(500).json(err.message)
  }
})

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
