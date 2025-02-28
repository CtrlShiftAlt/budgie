export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname === "/google6443eaf2bb8aeb37.html") {
            return new Response("google6443eaf2bb8aeb37", { status: 200 });
        }
        return env.ASSETS.fetch(request);
    },
}