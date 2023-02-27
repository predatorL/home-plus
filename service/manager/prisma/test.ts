import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 查
// async function main() {
//     const menus = await prisma.menu.findMany();
//     console.log(menus);
// }

// 增
async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Bob',
            email: 'bob@prisma.io'
        }
    })
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1)
})