import { equal } from "assert";
import { createClient } from "microcms-js-sdk";

export interface DataType {
 id: string
 title: string
}

const serviceDomain = process.env.SERVICE_DOMAIN;
const apiKey = process.env.API_KEY;

if (!serviceDomain || !apiKey) {
    throw new Error("no SERVICE_DOMAIN or apiKey");
}

export const client = createClient({
    serviceDomain,
    apiKey
});


const getPostBySlug =  async ({slug}:{slug : string}) => {
    try {
    const post = await client.get({
        endpoint: `blogs`,
        queries : {filters : `slug[equals]${slug}`}
    });
    console.log(post.contents)
    return post.contents[0]
    } catch (err) {
        console.log(err)
    }
}