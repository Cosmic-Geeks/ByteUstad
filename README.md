# ByteUstad

A blog by [Akshara A](https://github.com/akshara-a) and [Mameru Carr](https://github.com/mameru-carr)

## Adding Articles
There are 2 ways you can add articles:
1. __Manually__: Do the following directly in GitHub by clicking the edit icon in the respective files.
2. __Git__: Clone this repository, make your changes and push.

For both of these methods, doing changes directly in `main` branch will suffice for now. Note that
once changes are commited and pushed to `main` they will be deployed automatically.
### Instructions
1. Write the article in an `md` file in a Markdown editor of your choice (say, Obsidian). Or write it directly in a `mdx` file in a code editor (say, VS Code).
    1. If you write in a `md` file before uploading change the extension to `mdx`
    2. The file name should not contain spaces and should be camel cased (important)
2. Upload or Push the article to `src/pages/articles`
3. Go to `src/stores/articles.ts` and add metadata information about the articles (see below).
    1. The key is the name of the file without `.mdx`. For example, if the file was named `HelloWorld.mdx` you will use `HelloWorld` as key in `articles.ts`
    2. If the article is marked as `completed` it will automatically show up in `/articles` page.

## Example

1. Create the `md` or `mdx` file (say, `HelloWorld.mdx`):
```md
# Hello World

This is the article!
```

2. Upload the file to `src/pages/articles` using GitHub or Git (make sure it has `mdx` extension).
3. Add Metadata to `src/stores/articles.ts`. Since filename was `HelloWorld.mdx` the key is `HelloWorld`:
```ts
    state: () => ({
        articles: {
            'HelloWorld': {
                title: 'Hello, World!',
                status: 'In Progress',
                description: 'Testing only',
                authors: ['Akshara A', 'Mameru Carr'],
                date: new Date(2024, 9, 30)
            }
        }
    })
```
4. And, voila!