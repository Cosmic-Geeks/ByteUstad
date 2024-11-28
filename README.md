# ByteUstad

A blog by [Akshara A](https://github.com/akshara-a) and [Mameru Carr](https://github.com/mameru-carr)

[Visit the Blog!](https://byteustad.onrender.com/)

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
3. Go to `src/stores/Articles.ts` and add metadata information about the articles (see below).
    1. The key is the name of the file without `.mdx`. For example, if the file was named `HelloWorld.mdx` you will use `HelloWorld` as key in `Articles.ts`
    2. If the article is marked as `completed` it will automatically show up in `/articles` page.

### Example

1. Create the `md` or `mdx` file (say, `HelloWorld.mdx`):
```md
# Hello World

This is the article!
```

2. Upload the file to `src/pages/articles` using GitHub or Git (make sure it has `mdx` extension).
3. Add Metadata to `src/stores/Articles.ts`. Since filename was `HelloWorld.mdx` the key is `HelloWorld`:

```ts
import articleStatusEnum from "./StatusEnum";

state: () => ({
   articles: {
      'HelloWorld': {
         title: 'Hello, World!',
         status: articleStatusEnum.Completed,
         description: 'Testing only',
         authors: [Authors.Akshara, Authors.Mameru],
         tags: ['Reference', 'Software Architecture'],
         category: 'Architecture',
         date: new Date(2024, 9, 30)
      },
   }
})
```
4. And, voila!

### Notes
1. All fields are mandatory!
2. Make sure that tags are spelled correctly (only then will they be grouped together -- casing does matter)
3. The article will automatically show up in the articles page once it is marked as completed.
4. Be sure to check out the MDX Documentation for available features (you can use any vue component inside mdx file!)
5. To add a code block you can do the following
```
import {VCodeBlock} from "@wdns/vue-code-block";

# Hello, World!

You can use any component in MDX!
<VCodeBlock
    code={'console.log("Hello, World!")'}
    browserWindow={true}
    label="Hello, World!"
    lang={'javascript'}
/>
```
## Format