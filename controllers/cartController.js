const fs = require('fs')
const path = require('path');

const cartController = {
    
    createAksiya: async (req, res) => {
        const cartproduct = new Category({
            productId: req.body.productId,
            userId: req.body.userId
        })
        await cartproduct.save()
            .then(data => res.redirect("/"))
            .catch(err => {
                res.send(err)
            })
    },

}