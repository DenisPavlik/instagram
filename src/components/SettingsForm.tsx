"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloud } from "lucide-react";
import { updateProfile } from "@/actions";
import { useRouter } from "next/navigation";
import { Profile } from "@prisma/client";
import { useRef, useState } from "react";

export default function SettingForm({
  userEmail,
  profileDoc,
}: {
  userEmail: string;
  profileDoc: Profile;
}) {
  const router = useRouter();
  const fileInRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null)

  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data, userEmail);
        router.push("/profile");
        router.refresh();
      }}
    >
      <div className="flex gap-4 items-center">
        <div>
          <div className="bg-gray-500 size-24 rounded-full"></div>
        </div>
        <div>
          <input type="file" name="file" className="hidden"
          ref={fileInRef}
          onChange={ev => setFile(ev.target.files?.[0] ?? null)} />
          <Button type="button" variant="outline" onClick={() => fileInRef.current?.click()}>
            <UploadCloud /> change avatar
          </Button>
        </div>
      </div>
      <p className="mt-2 font-bold">username</p>
      <TextField.Root
        name="username"
        placeholder="your_username"
        defaultValue={profileDoc?.username || ""}
      ></TextField.Root>
      <p className="mt-2 font-bold">name</p>
      <TextField.Root
        name="name"
        placeholder="name"
        defaultValue={profileDoc?.name || ""}
      ></TextField.Root>
      <p className="mt-2 font-bold">subtitle</p>
      <TextField.Root
        name="subtitle"
        placeholder="subtitle"
        defaultValue={profileDoc?.subtitle || ""}
      ></TextField.Root>
      <p className="mt-2 font-bold">bio</p>
      <TextArea
        name="bio"
        placeholder="bio"
        defaultValue={profileDoc?.bio || ""}
      ></TextArea>
      <div className="mt-4 flex justify-center">
        <Button variant="solid">Save</Button>
      </div>
    </form>
  );
}
