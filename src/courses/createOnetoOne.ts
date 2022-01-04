import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 300,
            name: 'Curso de Java',
            description: 'Curso de Java Top',
            teacher: {
                connectOrCreate: {
                    where: {
                        name: 'Fernando Henrique Tozetto'
                    },
                    create: {
                        name: 'Fernando Henrique Tozetto'
                    }
                }
            }
        }
    })

    console.log(result);
}

main();