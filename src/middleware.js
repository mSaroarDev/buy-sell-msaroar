export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/user/:path*", "/logged", "/super-admin/:path*"],
};
