const express = require("express");


const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Create a instand of HTTP server
const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API's Working")
});

// Get - http://localhost:3000/restaurants -----> Return all Restaurant
app.get("/restaurants", async (req, res) => {


    const db_data = await prisma.restaurant.findMany()

    res.send(db_data)
});

// Post - http://localhost:3000/restaurants ------> Add a Restaurant
app.post('/restaurants', async (req, res) => {
    //data to frontend
    const data = req.body
    console.log(data)

    //DB logic
    const new_data = await prisma.restaurant.create({
        data: {
            id: data.id,
            restaurant_id: data.restaurant_id,
            image_url: data.image_url,
            title: data.title,
            rating: data.rating,
            tag: data.tag
        }
    })

    //send data to frontend
    res.send(new_data)
});

// Put - http://localhost:3000/restaurants  -----> Update a Restaurant
app.put("/restaurants", async (req, res) => {
    //Data from Frontend
    const data = req.body;

    //DB Logic
    const updated_data = await prisma.restaurant.update({
        where: {
            restaurant_id: data.restaurant_id,
        },
        data: {
            id: data.id,
            restaurant_id: data.restaurant_id,
            image_url: data.image_url,
            title: data.title,
            rating: data.rating,
            tag: data.tag,
        },
    });

    // send data to frontend
    res.send(updated_data)
});


// Delete - http://localhost:3000/restaurants  -----> Delete a Restaurant
app.delete("/restaurants", async(req, res)=>{
    //1.Data from Frontend
    const data = req.body

    //2.DB Logic
    await prisma.restaurant.delete({
        where: {
            restaurant_id: data.restaurant_id
        }
    })

    //3.Send data to frontent
    res.send("Restaurant is Deleted Successfully")
})
    
app.listen(3000)