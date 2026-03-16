class ExpressError extends Error {
    constructor(message, statusCode) {
        // super(message);
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
module.exports = ExpressError;