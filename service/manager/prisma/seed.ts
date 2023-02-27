import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create two dummy menu
    const menu1 = await prisma.menu.upsert({
        where: { title: 'Prisma adds the first menu' },
        update: {},
        create: {
            title: 'Prisma adds the first menu',
            body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
            description:
                "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
            published: false,
            createdUid: '222',
            updatedUid: '222'

        }
    })

    const menu2 = await prisma.menu.upsert({
        where: { title: "What's new in Prisma? (Q1/22)" },
        update: {},
        create: {
            title: "What's new in Prisma? (Q1/22)",
            body: 'Our engineers have been working hard, issuing new releases with many improvements...',
            description:
                'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
            published: true,
            createdUid: '222',
            updatedUid: '222'
        },
    })
    console.log({ menu1, menu2 });
}
main().catch((e) => {
    console.error(e);
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})