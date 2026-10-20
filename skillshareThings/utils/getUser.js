export async function getUser(id, title, body, userInfo) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) {
      throw new Error(`Status code: ${response.status}`);
    } else {
      const data = await response.json();

      id.textContent = `Id: ${data.id}`;
      title.textContent = `Title: ${data.title}`;
      body.textContent = `Body: ${data.body}`;

      userInfo.hidden = false;
    }
  } catch (error) {
    console.error(error);
  }
}
