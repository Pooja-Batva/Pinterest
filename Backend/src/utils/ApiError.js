class ApiError extends Error {
  constructor(statusCode=500, message="Something Went Wrong", errors = [], stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = null;
    this.sucess = false;
    this.stack = stack || new Error().stack;
  }
}

module.exports = ApiError;