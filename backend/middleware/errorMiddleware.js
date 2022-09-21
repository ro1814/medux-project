const notFound = ( request, response, next ) => {
    const error = new Error(`Not Found - ${request.URL}`)
    response.status(404)
    next(error)
}

const errorHandler = (error, request, response, next) => {
    const statusCode = res.statusCode === 200 ? 500 : response.statusCode
    response.status(statusCode)
    response.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack
    }) 
}

export { notFound, errorHandler }