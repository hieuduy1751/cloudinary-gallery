const cloudinary = require('../cloudinary');

module.exports.home = (req, res) => {
    let loadingStatus = false;
    cloudinary.api.resources((error, result) => {
        resources = result.resources.filter(item => item.public_id.indexOf('CodingClub') != -1);
        res.render('index', {
            resources,
            isLoading: loadingStatus
        });
    });
}

module.exports.getImgs = (req, res) => {

}