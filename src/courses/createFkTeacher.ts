import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 300,
            name: 'name',
            description: 'description',
            fk_id_teacher: '5c7bb8e0-d09b-4bcb-b33b-5d4db2295043',
        }
    });

    console.log(result);

}

main();