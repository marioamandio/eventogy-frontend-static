import { redirect } from "next/navigation";

export default function Home() {
  const targetUrl = "/events";
  redirect(targetUrl);
}
