const fs = require('fs')
const path = require('path');

const aksiyaController = {
    
    createAksiya: async (req, res) => {
        const aksiya = new Category({
            percent: req.body.percent,
            productId: req.body.productId,
            date: req.body.date
        })
        await aksiya.save()
            .then(data => res.redirect("/api/category"))
            .catch(err => {
                res.send(err)
            })
    },

}


module.exports = aksiyaController