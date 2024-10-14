import { auth } from "@clerk/nextjs/server";

const allowedIds = ["user_2n3jxcYK7ywNXub4VgrVfC4wruV"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return allowedIds.indexOf(userId) !== -1;
};
