const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

export async function Log(
  stack,
  level,
  packageName,
  message,
  accessToken
) {
  try {
    const response = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message
      })
    });

    return response;
  } catch (error) {
    console.error("Logger Error:", error);
  }
}