export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname.startsWith('/api/')) {

            return new Response('Ok');
        } else if (url.pathname.startsWith('/set-kv')) {
            await env.OoOo.put("say", "Hello World!");
            return new Response("Successful write", { status: 201 });
        } else if (url.pathname.startsWith('/get-kv')) {
            const value = await env.OoOo.get("say");
            return new Response(value, { status: 200 });
        }
        return env.ASSETS.fetch(request);
    }
}
