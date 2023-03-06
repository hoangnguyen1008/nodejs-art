'use strict'

const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const KeyTokenService = require('./keyToken.service')
const { createTokensPair } = require('../auth/authUtils')

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
                // Create publicKey, privateKey
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                })

                const publicKeyString = await KeyTokenService.createKeyToken({
                    userId: newShop._id,
                    publicKey
                })

                if (!publicKeyString) {
                    return {
                        code: 'XXXX',
                        message: 'public key error'
                    }
                }

                // Create Tokens Pair
                const tokens = await createTokensPair({ userId: newShop._id, publicKey, privateKey})
                console.log(`Tokens pairs created::`, tokens)

                return {
                    code: 201,
                    metadata: {
                        shop: newShop,
                        tokens
                    }
                }
            }

            return {
                code: 200,
                metadata: null
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