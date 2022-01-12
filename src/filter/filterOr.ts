import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: 'React',
                        mode: 'insensitive'
                    },
                    
                },
                {
                    name: {
                        contains: 'Java',
                        mode: 'insensitive'
                    }
                },
            ],
            AND: {
                duration: 200
            }
        }
    });

    console.log(result);
    
}

main();