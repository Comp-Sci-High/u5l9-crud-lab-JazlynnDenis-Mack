// Install EJS, Express, and MongoDB in Terminal

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.set("view engine", "ejs");

app.use(express.json());

const countrySchema = new mongoose.Schema({
  country: { type: String },
  flagURL: { type: String },
  population: { type: Number },
  officialLanguage: { type: String },
  hasNuclearWeapons: { type: Boolean },
});

const Country = mongoose.model("Country", countrySchema, "Countries");

// Create a POST route for "/add/country" that adds a country using the request body (3 points)
// Use postman to add at least THREE different countries

app.post("/add/:country", (req,res)=>{
  country: "America",
  flagURL: "data:image/jpeg;base64,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",
  population: 340000000,
  officialLanguage: "English",
  hasNuclearWeapons: true
})


app.post("/add/:country", (req,res)=>{
  country: "China",
  flagURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEXuHCX//wDuEx7yZWntACb82wnuFCXuACXuDyb//AD84AruHCTxUCD/+gD70Q3yZB7zah3zdRz1jhn97AbvMCPwPyH+9ALzbx35whH4thPvKCT3qxX4sBP+8QT71wzxSyD3pRX5vRL0gBv2nBfzehzxXiDxTiD5wBLwQiH96Ab3oRT2lxn1iBr7zQ76xw/wNCH8s03pAAAEuElEQVR4nO3ca3uiOhQFYHPONkS8IopKvVSnnmpv/v9/dxIuopbRhKkjhPV+m+l0Hlhkk7CDNhoAAAAAUHPi0QdQPvSy5Y8+hrJIhofosDEyiYVDh2QWYtRttR99LGVBT2x+IOI+C5xHH0tp0IKxXn/JmE+PPpTSEAMWWyKTI/qMM3F3ZPt0rD2J8JClI8WL7rfW4ivdaYT67Ch4tnlCpvVWrxLEKovEfx3ubM6kO9e6Z8qFSRLIejAisrl25LJUa27lbV9WzLQpM+nYnIcil2LsP41z5OvXzY5oJDOxuWoiaiX2pDNQiITMgn6x1sjyTPhOXvi9wSLM8buWR9KgZ3XXXOmfphh0bV/G0l5l8mxwmvRmeSZ8HM2uJsVzvu61sI7oLV5yGBTPmXBl35MPuXEmRevBcdNQhC0jhh+SpalbMBNadscqFEGTviWhyNVGouA6jOYsOAhBAzewJJJj6TD2q9hAoXe54A8n8r95sWQ2OpZO4eKJem+tPyi+0lFXOVWsHRI9/ygDW+YfamaZvBe40EQbP/7tXjWHCX0XZpGwZs7Pr197QR+LY+lVcipuz9zmpT07DeX7jz+uhSI+Tn97X8lQVKPEjHejIML++9ptpSPFqWQo2+7VCC70wlv3CC5kfanb9F4l41Yxk4Zof+pH8q7XYIwmY5neajN/q+TUw2momciiozmRqCWO6nGrMXPfg78bWu1vB8LYVGhfc85Yu5JVkxHO7HYkG5MWk2/SkCop8lrXE3HHJidJnza8jUKj5bVInsx2b/ih4pUT42l3LUe3b1oJVkQiUSfIj6TXrv7NoSjhfOVFMrR91/MqmuRlUt9BolDuOPEquRT9KU7u7eSrzgNFeLmZtOo8TmiaP+9MahxKfukw9lqgeCyZqkTurCMV2KWhIp3cEqL1SQ6b0z+Y99/Jt6NnT9lj4H5MtMkyWRsv7dtsasNAEdmLrjNHXmQ6HPcDA9NrLmSgNnwmgdIeSmsSX2KeNbA1X5bN/q+vtN9S7XstJU+AzawNfWxgz7QLQcSbQIH6UAKRww+H+xztXyG28emftaGF6EV/udAtBNGfTr8+e9FWYnR7WoZ3Odq/Iy6dyzZ02sDWLh56OZvGC76ZUBLqldi8NjTt1O6v3pvm0b9vZw+S5r2oUhEdtSjJ65REDWzt4lFDy0vuTO6o0pGod4vcw29OQTWwTWYeSjaNtd7ELjEnmP++nSaXKvozT9aGMV7WlAvfXX3NSt5qDRYaXNaOr3Kp+AM1v3H4BmenZvUep02r3t2oM3L5+yzrkMIes/3DGtrIjd9RkQV39f2dOgmP26i13gQ5hyQSCOIbsqKH9DOS4UFP+A6H1HgVvS8rn4abyCS1X74IolVlX5q+A/U43Z1t/ZrvoJ6LP2Jq1J60HyUfOHA9jiVaIvtii2DWsf5rYfSI8Un7dY8vaZM4P74Et5h5IcZJQ31GNElEfSUZElForvZw1CbQrc+w1IYYBjPPIbUPYsd7BD8hLhi1/W66pWw9mrEOZpwLPEAml8Sg6JdgWAyJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADUyj9wqfEvXPofIGo4CIkvSpEAAAAASUVORK5CYII=",
  population: 550000000,
  officialLanguage: "Manderin",
  hasNuclearWeapons: true
})

app.post("/add/:country", (req,res)=>{
  country: "Switzerland",
  flagURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAIVBMVEXaKRz////YEQDxurjYAAD66enuq6j77e3xvLnwt7T65ONHkNKLAAABKklEQVR4nO3dO27EMBBEwbVE/fb+B3bqwAG5sDAtuuoABF/ewLxeAAAAAAAAAAAAf2FpvZbqr35m2Y+tz7E/M3E5v3qdDy1cuwtXhZkUKsynUGE+hQrzKVSYT6HCfAoV5lOoMJ9ChfkUKsynUGE+hQrzKVSYT6HCfAoV5lOYV7gMald34dVGH78lcD/XIde7u/B9jT193jK5bUf3h+93tDsKt+qsHzaFChWWU6hQYT2FChXWU6hQYT2FChXWU6hQYT2FChXWU6hQYT2FChXWU6jw98Lp9zTzb6Lm37UNe942cZRChfkUKsynUGE+hQrzKVSYT6HCfAoV5lOoMJ9ChfkUKsynUGE+hQrzKVSYT6HCfAoV5vsHN52nv8s9/211AAAAAAAAAAAgzjcc0zQaAoZv4gAAAABJRU5ErkJggg==",
  population: 25000000,
  officialLanguage: "German",
  hasNuclearWeapons: false
})

// Create a GET route for "/" that renders countries.ejs with every country from the Countries collection (1 point)

app.get("/", (req,res)=>{
  res.render(countrySchema)
})
// Go to countries.ejs and follow the tasks there (2 points)


// Create a dynamic PATCH route handler for "/update/{name}" that modifies the population of the country specified in the path (3 points)
// Test this route on post man



// Create a DELETE route handler for "/delete/country" that deletes a country of your choice (3 points)
// Test this route on post man


async function startServer() {
  
    // add your SRV string with a database called countries
  await mongoose.connect("...");

  app.listen(3000, () => {
    console.log("Server is running");
  });
}

startServer();
