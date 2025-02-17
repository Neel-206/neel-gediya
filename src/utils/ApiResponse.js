class ApiResponce {
    constructor(statusCode, message = "somthing is wrong", data) {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}


export { ApiResponce }