import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import million from "million/compiler";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            refresh: true,
        }),
        million.vite({ auto: true }),
        react(),
    ],
});
