import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: 'e7844af2-14f4-4373-90fe-d5e446f689d1'
        },
        data: {
            duration: 500,
        }
    })

    console.log(result);

}

main();