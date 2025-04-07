import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  route("login", "./routes/login.tsx"),
  route("signIn", "./routes/signIn.tsx"),
  route("dashboard", "./routes/dashboard.tsx"),
] satisfies RouteConfig;
