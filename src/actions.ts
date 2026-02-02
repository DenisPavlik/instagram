"use server";

import { prisma } from "./db";

export async function updateProfile(data: FormData, userEmail: string) {
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
