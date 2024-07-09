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



interface Post {
  title: string
  subTitle : string
  publishDate:string
  eyecatch:{
    url:string
    height:number
    width:number
  }
  content:string
  categories:[]
  // いくつもある
}

// type PostBySlug = Promise<Post | undefined>;
//export const getPostBySlug: (slug: string) => PostBySlug = async (slug) => {
export const getPostBySlug = async (slug: string): Promise<Post | undefined> => {
    try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }
    });
    return post.contents[0];
  } catch (err) {
    console.log(err);
    return undefined;
  }
};


export type Slugs = {
   title: string,
   slug: string
}

export const getAllSlugs = async (limit:number = 100):Promise<Slugs[]|undefined> => {
    try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields : "title,slug",orders:"-publisDate",limit: limit }
    });
    return slugs.contents;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}