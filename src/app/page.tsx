import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <Link href="/auth/login">Login</Link>  <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
