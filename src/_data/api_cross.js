import fetch from "node-fetch";
import "dotenv/config";

export default async function() {
  const params = new URLSearchParams({
    limit: '50',
  });
  const coffeeDataResponse = await fetch(process.env.ENDPOINT_URL_CROSS +  '?' + params.toString(), {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  });
  const berryData = await coffeeDataResponse.json();
  return berryData.contents;
};
