import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: 'e31ba4ad-539f-488e-971d-73df3ecec172',
        }
    })

    console.log(result);

}

main();