import express  from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer"


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {


    res.render("index.ejs", {
    })
});


app.post("/", (req, res) => {
    console.log(req.body)

    const transpoter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user:"rufustestimony28@gmail.com",
            pass:'scehnwdqdmqztbcd'
        }
    })

    const mailOption  ={
        form: req.body.email,
        to: "rufustestimony28@gmail.com",
        subject: `message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.text
    }

    transpoter.sendMail(mailOption, (error,info) =>{
        if (error) {
            console.log("error")
            res.send("error")
        }else{
            console.log("Email sent:" + info.response)
            res.send("success")
        }
    })
})


app.get("/html", (req, res) =>{
    var url = req.url
    res.redirect("https://stackoverflow.com/questions/28225458/get-response-of-url-in-nodejs-express-http")
})
app.get("/css", (req, res) =>{
    var url = req.url
    res.redirect("https://web.dev/learn/css")
})
app.get("/bootstrap", (req, res) =>{
    var url = req.url
    res.redirect("https://getbootstrap.com")
})
app.get("/javascript", (req, res) =>{
    var url = req.url
    res.redirect("https://www.javascript.com/")
})
app.get("/jquery", (req, res) =>{
    var url = req.url
    res.redirect("https://jquery.com/")
})
app.get("/nodejs", (req, res) =>{
    var url = req.url
    res.redirect("https://nodejs.org/en")
})
app.get("/expressjs", (req, res) =>{
    var url = req.url
    res.redirect("https://expressjs.com/")
}
)
app.get("/ejs", (req, res) =>{
    var url = req.url
    res.redirect()
})
app.get("/react", (req, res) =>{
    var url = req.url
    res.redirect("https://react.dev/")
})
app.get("/sql", (req, res) =>{
    var url = req.url
    res.redirect("https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.")
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
