module.exports = {
    leaveMessage: (req,res)=>{
        // console.log("click")
        let message = req.body.message
        res.status(200).send(message)
    },
    getVideo: (req,res) => {
        let videos = ["https://www.youtube.com/watch?v=YxZsXZeFU1A",
        "https://www.youtube.com/watch?v=cH0gED2stDM",
        "https://www.youtube.com/watch?v=r43n4P3QxlU",
        "https://www.youtube.com/watch?v=pxBQLFLei70",
        "https://www.youtube.com/watch?v=VSceuiPBpxY"
        ]
        let randomIndex = Math.floor(Math.random() * videos.length);
        let randomVid = videos[randomIndex]
        res.status(200).send(randomVid)
    },
    getCat: (req,res) =>{
        let gatos = "https://cataas.com/cat"
        res.status(200).send(gatos)
    }
}