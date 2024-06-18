import { createClient } from "microcms-js-sdk";

const serviceDomain = process.env.SERVICE_DOMAIN;
const apiKey = process.env.API_KEY;

if (!serviceDomain || !apiKey) {
    throw new Error("no SERVICE_DOMAIN or apiKey");
}

export const client = createClient({
    serviceDomain,
    apiKey
});