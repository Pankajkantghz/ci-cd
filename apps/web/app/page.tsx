
import { prismaClient } from "@repo/db/client";


export default async function Home() {
  const user = await prismaClient.users.findFirst();

  return (
    <div>
      <h1>Name Pankaj</h1>
      {user?.username}
       <h1>Password</h1>
      {user?.password}
      <br />
      <div>
        hi there
      </div>
    </div>
  );
}
