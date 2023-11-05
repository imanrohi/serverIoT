import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import deviceRoute from './routes/deviceRoute.js'
import userRoute from './routes/userRoute.js'

dotenv.config()




const app = express();
app.use(cors())
app.use(express.json())
// app.use(cors({
//     credentials: false,
//     origin: ['http://localhost:5173', 'https://smarthome-indonesia.vercel.app']
// }))

app.use(express.json())
app.use(deviceRoute)
app.use(userRoute)

app.get('/', async (req, res) => {
    res.status(200).json({ msg: 'Success'})
})

app.listen (process.env.PORT, ()=>{
    console.log('listening on port '+ process.env.PORT )
})


// app.get('/', (req, res) => {
//   res.status(200).json(`hello I'm from port :` + port);
// });

// app.listen(port, () => {
//   console.log('listening on port ' + port);
// });  