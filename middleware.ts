export { default } from "next-auth/middleware";

export const config = { matcher: ["/signed/:path*"] };
