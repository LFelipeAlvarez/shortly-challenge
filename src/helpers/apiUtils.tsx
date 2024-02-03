type ApiResponseNeeded = {
  shortURL: string;
  // code: string;
};

type ApiResponse = ApiResponseNeeded & {
  [key: string]: unknown;
};

const endPoint = "https://api.short.io/links";
const apikey = import.meta.env.VITE_REBRANDLY_API_KEY;
const headers = { authorization: apikey, "content-type": "application/json" };

export const getShortenedUrl = async (originalURL: string): Promise<ApiResponse> => {

  const body = JSON.stringify({
    originalURL,
    domain: "d9kg.short.gy",
  });

  const response = await fetch(endPoint, { headers, body, method: "POST" });
  if (!response.ok) {
    alert("A website error has occurred. Sorry for the temporary inconvenience.");

    throw new Error(`Error fetching: ${response}`);
  }
  const data = await response.json();
  return data;
};
