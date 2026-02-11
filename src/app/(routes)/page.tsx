import { auth } from "@/auth";
import Header from "@/components/Header";

export default async function Home() {
  const session = await auth();
  const userName = session?.user?.name
  return (
    <div className='bg-black text-white min-h-screen'>
      <Header userName={userName} />
    </div>
  )
}
