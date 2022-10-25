const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const helmet = require('helmet');
const expressHbs = require('express-handlebars');
const app = express();
const http = require('http').Server(app);
// const hbsHelper = require('./routes/helpers');
const compression = require('compression');
const favicon = require('serve-favicon');
app.use(helmet());

app.use(favicon(path.join(__dirname, 'public/images/favicon', 'favicon.ico')));


app.engine('.hbs', expressHbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
// app.use(compression());
app.use(express.static(__dirname+"/public"));
app.use("/overview/",express.static(__dirname + "/public"));
app.use("/versions/",express.static(__dirname + "/public"));
app.use("/lien-writer-pro/",express.static(__dirname + "/public"));
app.use("/multi-state/",express.static(__dirname + "/public"));
app.use("/tri-state/",express.static(__dirname + "/public"));
app.use("/single-state/",express.static(__dirname + "/public"));
app.use("/unit-usage/",express.static(__dirname + "/public"));
app.use("/citrix-server/",express.static(__dirname + "/public"));
app.use("/lite-version/",express.static(__dirname + "/public"));
app.use("/lien-releaser/",express.static(__dirname + "/public"));
app.use("/chexwriter/",express.static(__dirname + "/public"));
app.use("/about-lien-writing-software/",express.static(__dirname + "/public"));
app.use("/property-research/",express.static(__dirname + "/public"));
app.use("/category/news/",express.static(__dirname + "/public"));
app.use("/contact-us/",express.static(__dirname + "/public"));
app.use("/customer-center/",express.static(__dirname + "/public"));
app.use("/fwm-software-downloads/",express.static(__dirname + "/public"));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(flash());




app.use(function (req, res, next) {
    if(req.url != "/healthcheckup"){
        res.locals.currentUrl= req.url.split("/")[1];
        res.locals.metaUrl= req.url;}
    next();
});



app.use(publicRoutes);
// app.use(privatesRoutes);
// app.use(adminRoutes);

app.use(function (req, res, next) {
    res.redirect('/error');
});

app.use((err, req, res, next)=>{
    res.redirect('/error');
});


http.listen(/*config.port*/process.env.PORT || 3600, (err)=>{
    if(err) console.log(err);
    console.log("Server started");
});
