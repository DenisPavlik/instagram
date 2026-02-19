"use client";
import { createPost } from "@/actions";
import { Button, TextArea } from "@radix-ui/themes";
import { CloudUploadIcon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function CreatePage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.set("file", file);
      fetch("/api/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((url) => {
          setImageUrl(url);
        });
    }
  }, [file]);

  return (
    <form action={async(data) => {
      const id = await createPost(data)
      router.push(`/post/${id}`)
      router.refresh();
    }}>
      <input type="text" className="hidden" readOnly value={imageUrl} name="imageUrl" />
      <div className="flex flex-col gap-4">
        <div>
          <div className="w-64 min-h-64 p-2 bg-gray-400 rounded-md relative">
            {imageUrl && (
              <img src={imageUrl} alt="preview" className="rounded-md" />
            )}
            <div className="absolute inset-0 flex items-center justify-center
            ">
              <input
                className="hidden"
                type="file"
                name="file"
                ref={fileInputRef}
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <Button
              type="button"
              className="cursor-pointer"
                variant="surface"
                onClick={() => fileInputRef.current?.click()}
              >
                <CloudUploadIcon size={16} />
                Upload
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <TextArea rows={2} placeholder="Write a caption..." name="caption" />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button type="submit">
          <SendIcon size={16} />
          Publish
        </Button>
      </div>
    </form>
  );
}
