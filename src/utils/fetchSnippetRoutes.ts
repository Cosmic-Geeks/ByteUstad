import Router from "@/router";
import MdxComponent from "@/components/MdxComponent.vue";

function fetchSnippetRoutes(router: typeof Router) {
    const snippetComponents = import.meta.glob(`/src/pages/snippets/*.mdx`);

    // Create Child Route For Each Article
    for(const key of Object.keys(snippetComponents)) {
        const name = key.split("/").pop()?.replace(".mdx", "");
        router.addRoute('Snippet', {
            path: `/snippet/${name}`,
            component: MdxComponent,
            props: {
                mdxComponent: snippetComponents[key],
            },
            name });
    }
}

export default fetchSnippetRoutes;
