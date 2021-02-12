import App from "./app";

let port = process.env.PORT || '3030';

new App().app.listen(port, function () {
    console.log(`server running in ${port}`);
});