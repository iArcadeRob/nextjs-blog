import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

const prependZero = (x) => x.toString().length === 1 ? `0${x}` : x;

export function getStaticPageMetadata() {
  // Get file names under /posts
  let fileNames = fs.readdirSync(postsDirectory).filter(f => f.indexOf('.json') !== -1);

  console.log('these are the file names');
  console.log(fileNames);

  const allPostsData = fileNames.map(fileName => {
    // Remove ".json" from file name to get id
    const id = fileName.replace(/\.json$/, '');

    // Read JSON file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the JSON data
    const parsedContents = JSON.parse(fileContents);

    // Combine the metadata with the id
    return {
        id,
        title: parsedContents.title,
        date: `${parsedContents.year}-${prependZero(parsedContents.month)}-${prependZero(parsedContents.day)}`
    }
  })
  // Sort posts by id ascending
  return allPostsData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.json$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.json`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const parsedContent = JSON.parse(fileContents);
    const contentHtml = `<span>${parsedContent.transcript}</span>`;

    // Combine the data with the id
    return {
        id,
        title: parsedContent.title,
        alt: parsedContent.alt,
        img: parsedContent.img,
        date: `${parsedContent.year}-${prependZero(parsedContent.month)}-${prependZero(parsedContent.day)}`,
        contentHtml
    }
}