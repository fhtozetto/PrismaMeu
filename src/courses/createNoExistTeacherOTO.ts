import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 300,
            name: 'Curso de Elixir',
            description: 'Curso de Elixir Top',
            teacher: {
                create: {
                    name: 'Pedro Hideo'
                }
            }
        }
    })

    console.log(result);
}

main();