exports.getTime = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `getMethod only accept GET method, you tried: ${event.httpMethod}`
    );
  }
  console.info("received:", event);

  const name = event.queryStringParameters.name;

  let response = {};

  try {
    const date = new Date();
    const currentTime = date.toLocaleTimeString("es-ES", {
      timeZone: "Europe/Madrid",
    });
    response = {
      statusCode: 200,
      body: `<p>Hello ${name}, the time is ${currentTime}</p>`,
      headers: {
        "Content-Type": "text/html",
      },
    };
  } catch (error) {
    response = {
      statusCode: 400,
      body: `<p>Name not found</p>`,
      headers: {
        "Content-Type": "text/html",
      },
    };
  }

  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
