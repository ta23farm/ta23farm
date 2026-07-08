import fetch from "node-fetch";
import "dotenv/config";

export default async function() {
  const coffeeDataResponse = await fetch(process.env.ENDPOINT_URL_COFFEE, {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  });
  const berryData = await coffeeDataResponse.json();
  return berryData.contents;
};
