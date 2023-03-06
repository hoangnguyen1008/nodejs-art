'use strict'

const AccessService = require('../services/access.service')

class AccessController {

    signUp = async (req, res, next) => {
        try {
            console.log(`[P]::signUp::`, req.body)
            //200: success
            //201: created
            return res.status(201).json(AccessService.signUp(req.body))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController()