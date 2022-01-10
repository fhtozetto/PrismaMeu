import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            course: {
                create: {
                    duration: 200,
                    name: 'Curso de NodeJS',
                    description: 'Curso completo de NodeJS',
                    teacher: {
                        create: {
                            name: 'Lucas Eiji'
                        }
                    }
                }
            },
            module: {
                create: {
                    description: 'Curso completo de PrismaIO',
                    name: 'Prisma IO',
                }
            }
        }
    });

    console.log(result);
}

main();