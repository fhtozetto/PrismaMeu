import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 300,
            name: 'Curso de React-Native',
            description: 'Curso de React-Native Top',
            teacher: {
                connect: {
                    id: "4e480175-cf96-48a5-b173-74bdc431a9ae",
                } 
            }
        }
    })

    console.log(result);
    
}

main();