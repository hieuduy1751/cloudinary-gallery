const cloudinary = require('../cloudinary');
const fs = require('fs');

module.exports.home = (req, res) => {
    let loadingStatus = false;
    cloudinary.api.resources({
        max_results: 500
    },(error, result) => {
        resources = result.resources.filter(item => item.public_id.indexOf('CodingClub') != -1);
        res.render('index', {
            resources,
            isLoading: loadingStatus
        });
    });
}

module.exports.upload = (req, res) => {
    cloudinary.uploader.upload(req.file.path, {
        public_id: req.file.originalname,
        folder: 'CodingClub',
        resource_type: 'image'
    }, (error, result) => {
        if(!error) {
            fs.unlinkSync(req.file.path);
            res.redirect('/');
        }
        else
            res.render('index', {
                error: error.message
            })
    });
}

module.exports.delete = (req, res) => {
    cloudinary.uploader.destroy('CodingClub/' + req.params.id, function(error,result) {
        if(!error)
            res.redirect('/');
        else
            res.render('index', {
                error: error.message
            })
    });
}