"use server";

import { auth } from "./auth";
import { prisma } from "./db";

async function getSessionEmailOrThrow() {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }
  return session.user.email;
}

export async function updateProfile(data: FormData) {
  const userEmail = await getSessionEmailOrThrow();
  const newUserData = {
    username: data.get("username") as string,
    avatar: data.get("avatar") as string,
    name: data.get("name") as string,
    subtitle: data.get("subtitle") as string,
    bio: data.get("bio") as string,
  };
  await prisma.profile.upsert({
    where: {
      email: userEmail,
    },
    update: newUserData,
    create: {
      email: userEmail,
      ...newUserData,
    },
  });
}

export async function getProfile(userEmail: string) {
  const profileDoc = await prisma.profile.findFirstOrThrow({
    where: {
      email: userEmail
    }
  })
  return profileDoc
}

export async function createPost(data: FormData) {
  const userEmail = await getSessionEmailOrThrow();
  const imageUrl = data.get("imageUrl") as string;
  const caption = data.get("caption") as string;
  const postDoc = await prisma.post.create({
    data: {
      author: userEmail,
      image: imageUrl,
      description: caption,
    }
  });
  return postDoc.id;
}