import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.books.create({
        data: {
            name: 'Arquitetura limpa',
            author_id: 'f661b127-ac83-410f-9a73-ccf49d7acfbb',
        }

    });

    console.log(result);

}

main();