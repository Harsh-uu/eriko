import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <main className="grid place-items-center w-screen h-screen overflow-hidden">
<SignIn />
    </main>
}