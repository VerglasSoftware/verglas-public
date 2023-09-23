import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';

import {unified} from 'unified'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  //const fileNames = fs.readdirSync(postsDirectory);

  const fileNames = [];

  fs.readdirSync(postsDirectory).forEach(date => {
    fs.readdirSync(postsDirectory + '/' + date).forEach(post=> {
        fileNames.push(date + '/' + post)
    })
  })

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const date = fileName.replace(/\.md$/, '').split('/')[0];
    const slug = fileName.replace(/\.md$/, '').split('/')[1]

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      date,
      slug,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
    const fileNames = [];

    fs.readdirSync(postsDirectory).forEach(date => {
      fs.readdirSync(postsDirectory + '/' + date).forEach(post=> {
          fileNames.push(date + '/' + post)
      })
    })

  return fileNames.map((fileName) => {
    return {
      params: {
        date: fileName.replace(/\.md$/, '').split('/')[0],
        slug: fileName.replace(/\.md$/, '').split('/')[1],
      },
    };
  });
}

export async function getPostData(date, slug) {
  const fullPath = path.join(postsDirectory, `${date}/${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    date,
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
