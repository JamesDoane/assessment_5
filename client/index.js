let bodyHtml = document.querySelector("body")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let p = document.createElement("p")
const cat = document.getElementById("cat")
h2.appendChild(p)

 document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          h1.innerHTML = ''
          h1.innerHTML = `<p>${data}</p>`
        });
  };

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          h1.innerHTML = ''
          h1.innerHTML = `<p>${data}</p>`
        });
  };
document.getElementById("video").onclick = function () {
    axios.get("http://localhost:4000/api/video/")
        .then(function (response) {
            let data = response.data
            window.open(data)
        });
  };
  let form = document.querySelector('form');
form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    let message = document.querySelector("input")

    let messageObj = message.value

    // console.log(toString(messageObj))
    axios.post("http://localhost:4000/api/message/", messageObj)
        .then(({data: message})=> {
            // const data = res.data
            p.innerHTML = ""
            p.innerHTML = `${message}`
        });
  });

  cat.addEventListener('click' , ()=>{
    axios.get(`http://localhost:4000/api/cat/`)
    .then((res)=>{
            let data = res.data
            window.open(data)
                
            })
        })