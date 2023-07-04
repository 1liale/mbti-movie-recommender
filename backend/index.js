exports.handler = async (event) => {
    const test = "test"
    const response = {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda and Github!"),
    }
    return response
}