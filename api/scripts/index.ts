import { PrismaClient } from '@prisma/client';

const prisma:PrismaClient = new PrismaClient();

async function main() {
  // Create a user for test
  await prisma.user.create({
    data: { 
      username: 'Admin', 
      email: 'someadminmail@app.com',
      password: 'admin'
    },
  })
  // Logging this user
  const users = await prisma.user.findMany();
  console.log(users);
}

main().finally(async () => {
  await prisma.$disconnect();
})