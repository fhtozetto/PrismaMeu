import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(duration: number, name: string, description: string) {
    const result = await prisma.courses.create({
        data: {
            duration: duration,
            name: name,
            description: description,
        }
    });

    console.log(result);

}

//create();
export { create };