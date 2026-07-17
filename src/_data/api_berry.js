import fetch from "node-fetch";
import "dotenv/config";

export default async function() {
  const params = new URLSearchParams({
    limit: '50',
  });
  const coffeeDataResponse = await fetch(process.env.ENDPOINT_URL_BERRY + '?' + params.toString(), {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY, "LIMIT" : 100 },
  });
  const berryData = await coffeeDataResponse.json();
  return berryData.contents;
};
