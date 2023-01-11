import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 1. To create the users
  const users = [
    {
      name: "Naruto Uzumaki",
      email: "naruto@duck.com",
    },
    {
      name: "Sasuke Uchiiha",
      email: "sasuke@duck.com",
    },
  ];

  // Since sqllite doesn't support createMany, we have to use loop here
  for (let item of users) {
    const user = await prisma.user.create({
      data: item,
    });

    console.log("Created user: ", user);
  }
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
