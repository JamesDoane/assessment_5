const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ["A great victory is in your future.",
					 "You would do well to reconsider your current trajectory.",
					 "Today will not go the way you think it will.",
           "There are many who would be your ally.",
           "You will find what you seek in the last place you look."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});
app.get("/api/video", ctrl.getVideo)
app.get("/api/cat", ctrl.getCat)
app.post("/api/message", ctrl.leaveMessage)

app.listen(4000, () => console.log("Server running on 4000"));
