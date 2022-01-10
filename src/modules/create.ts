import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            description: 'Aprendendo firebase do zero',
            name: 'Aprendendo Firebase',
            courses: {
                create: {
                    course: {
                        connect: {
                            id: '5158b5d9-51fd-4283-848d-c14b89fe8e6c'
                        }
                    }
                }
            }
        }
    });

    console.log(result);

}

main();