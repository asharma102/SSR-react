import app from './app';

var port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});