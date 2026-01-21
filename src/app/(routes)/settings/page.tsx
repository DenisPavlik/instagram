import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadCloud } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile setting</h1>
      <form action={async () => {
        'use server';
        
      }}>
        <div className="flex gap-4 items-center">
          <div>
            <div className="bg-gray-500 size-24 rounded-full"></div>
          </div>
          <div>
            <Button type="button" variant="outline"><UploadCloud /> change avatar</Button>
          </div>
        </div>
        <p className="mt-2 font-bold">username</p>
        <TextField.Root name="username" placeholder="your_username"></TextField.Root>
        <p className="mt-2 font-bold">name</p>
        <TextField.Root placeholder="name"></TextField.Root>
        <p className="mt-2 font-bold">subtitle</p>
        <TextField.Root placeholder="subtitle"></TextField.Root>
        <p className="mt-2 font-bold">bio</p>
        <TextArea placeholder="bio"></TextArea>
        <div className="mt-4 flex justify-center">
          <Button type="submit" variant="solid">Save</Button>
        </div>
      </form>
    </div>
  );
}
