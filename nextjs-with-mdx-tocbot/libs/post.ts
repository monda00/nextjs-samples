import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "contents/posts");

export function GetAllPostSlugs() {
  const postFilePaths = readdirSync(POSTS_PATH).filter((path) =>
    /\.mdx?$/.test(path)
  );
  return postFilePaths.map((path) => {
    const slug = path.replace(/\.mdx?$/, "");
    return slug;
  });
}

export function GetPostBySlug(slug: string) {
  const markdown = readFileSync(`contents/posts/${slug}.mdx`, "utf8");

  const { content, data } = matter(markdown);
  return {
    content,
    data,
  };
}
