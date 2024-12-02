
const middleware = {
    isLoggedIn: function(req, res, next) {
        if(req.session && req.session.user) {
            next();
        } else {
            req.session.error = "Please login first."
            console.log("Redirecting to login");
            res.redirect("/login");
        }
    }
}


module.exports = middleware;