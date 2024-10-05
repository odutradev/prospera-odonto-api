import { readFileSync } from 'node:fs';

const replaceMarkdown = (file, replaces) => {
    try {
        var markdown = readFileSync(`./src/config/markdown/${file}.md`, { encoding: 'utf-8' });
        replaces.map(([key, value]) => {
            markdown = markdown.replace(`{${key}}`, value);
        });
        return markdown;
    } catch (err){

    }
};

export default replaceMarkdown