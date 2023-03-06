'use strict'

const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const ShopRole = {
    SHOP: '01',
    WRITER: '02',
    EDITOR: '03',
    ADMIN: '04'
}

class AccessService {

    static signUp = async ({ name, email, password }) => {
        try {
            const holderShop = await shopModel.findOne({ email }).lean()

            if (holderShop) {
                return {
                    code: 'XXXX',
                    message: 'shop already registered'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10)

            const newShop = await shopModel.create({
                name, email, password: passwordHash, roles:[ShopRole.SHOP]
            })

            if (newShop) {
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                })
                console.log({ privateKey, publicKey})
            }

        } catch (error) {
            return {
                code: 'error code',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService