import { auth } from "@/auth";
import { prisma } from "@/db";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloud } from "lucide-react";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const session = await auth();
  const profileDoc = await prisma.profile.findFirstOrThrow({
    where: {
      email: session?.user?.email as string,
    },
  });
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile setting</h1>
      <form
        action={async (data: FormData) => {
          "use server";
          await prisma.profile.upsert({
            where: {
              email: session?.user?.email || "",
            },
            update: {
              username: data.get("username") as string,
              name: data.get("name") as string,
              subtitle: data.get("subtitle") as string,
              bio: data.get("bio") as string,
            },
            create: {
              email: session?.user?.email || "",
              username: data.get("username") as string,
              name: data.get("name") as string,
              subtitle: data.get("subtitle") as string,
              bio: data.get("bio") as string,
            },
          });
          redirect("/profile");
        }}
      >
        <div className="flex gap-4 items-center">
          <div>
            <div className="bg-gray-500 size-24 rounded-full"></div>
          </div>
          <div>
            <Button type="button" variant="outline">
              <UploadCloud /> change avatar
            </Button>
          </div>
        </div>
        <p className="mt-2 font-bold">username</p>
        <TextField.Root
          name="username"
          value={profileDoc.username || undefined}
          placeholder="your_username"
        ></TextField.Root>
        <p className="mt-2 font-bold">name</p>
        <TextField.Root
          name="name"
          value={profileDoc.name || undefined}
          placeholder="name"
        ></TextField.Root>
        <p className="mt-2 font-bold">subtitle</p>
        <TextField.Root
          name="subtitle"
          value={profileDoc.subtitle || undefined}
          placeholder="subtitle"
        ></TextField.Root>
        <p className="mt-2 font-bold">bio</p>
        <TextArea
          name="bio"
          value={profileDoc.bio || undefined}
          placeholder="bio"
        ></TextArea>
        <div className="mt-4 flex justify-center">
          <Button variant="solid">Save</Button>
        </div>
      </form>
    </div>
  );
}
