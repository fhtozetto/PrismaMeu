import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.authors.create({
        data: {
            name: 'Pedro Hideo',
            books: {
                createMany: {
                    data: [
                        { name: 'Lei do mínimo esforço' },
                        { name: 'O rei do pedaço' },
                        { name: 'Olha que fofura.' },
                    ]
                }
            }
        }
    });

    console.log(result);

}

main();