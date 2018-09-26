// Methods for Email Controller
module.exports = {
    sendEmail: function(req, res){
        console.log(req.body);
        res.status(200).send();
    }
};