const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nodejs ecommerce',
            version: '1.0.0',
            description: 'CURD API for this web app',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            },
        ],
        components: {
            schemas: {
                Product: {
                    type: 'object',
                    required: ['title', 'price', 'description'],
                    properties: {
                        price: {
                            type: 'interger',
                            description: 'The price of the book'
                        },
                        description: {
                            type: 'string',
                            description: 'the description of the book'
                        }
                    }
                }
            },
            responses : {
                400: {
                    description: 'Missing API key - include it in the Authorization header',
                    contents: 'application/json'
                },
                401: {
                    description: 'Unauthorized - incorrect API key or incorrect format',
                    contents: 'application/json'
                },
                404: {
                    description: 'Not found - the book was not found',
                    contents: 'application/json'
                }
            },
        },
    },
    apis: ['./routes/shop.js']
}

const specs = swaggerJsdoc(options)

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}