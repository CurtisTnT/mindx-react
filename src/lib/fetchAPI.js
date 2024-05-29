async function fetchAPI(props) {
  const { url, method = "GET", headers, body } = props;

  try {
    const res = await fetch(url, {
      method,
      headers,
      body,
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export { fetchAPI };
