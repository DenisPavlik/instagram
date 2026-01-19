import { auth } from "@/auth";
import Header from "@/components/Header";

export default async function Home() {
  const session = await auth();
  const userName = session?.user?.name
  return (
    <div className=''>
      <Header userName={userName} />
    </div>
  )
}
