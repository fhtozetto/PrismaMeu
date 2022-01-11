import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: '5158b5d9-51fd-4283-848d-c14b89fe8e6c',
        },
        include: {
            modules: true,
        }
    })

    console.log(JSON.stringify(result));

}

main();