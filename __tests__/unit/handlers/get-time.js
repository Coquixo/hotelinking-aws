const lambda = require("../../../src/handlers/get-time");

describe("Test getTime", () => {
  it("should return current time with your name", async () => {
    const event = {
      httpMethod: "GET",
      queryStringParameters: { name: "Alex" },
    };
    const result = await lambda.getTime(event);

    const date = new Date();
    const currentTime = date.toLocaleTimeString("es-ES", {
      timeZone: "Europe/Madrid",
    });
    const expectedResult = {
      statusCode: 200,
      body: `<p>Hello Alex, the time is ${currentTime}</p>`,
      headers: {
        "Content-Type": "text/html",
      },
    };

    expect(result).toEqual(expectedResult);
  });
});
