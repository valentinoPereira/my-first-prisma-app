import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 2. To update the user
  const user = await prisma.user.findFirst({
    where: {
      email: "naruto@duck.com",
    },
  });

  if (!user) {
    console.log("User not found.");
    return;
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: "Baruto Uzumaki",
    },
  });

  console.log(updatedUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
