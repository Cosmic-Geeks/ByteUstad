import Router from "@/router";
import MdxComponent from "@/components/MdxComponent.vue";

function fetchArticleRoutes(router: typeof Router) {
    const articleComponents = import.meta.glob(`/src/pages/articles/*.mdx`);

    // Create Child Route For Each Article
    for(const key of Object.keys(articleComponents)) {
        const name = key.split("/").pop()?.replace(".mdx", "");
        router.addRoute('Article', {
            path: `/article/${name}`,
            component: MdxComponent,
            props: {
                mdxComponent: articleComponents[key],
            },
            name });
    }
}

export default fetchArticleRoutes;