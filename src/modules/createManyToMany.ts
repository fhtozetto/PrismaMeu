import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: '5158b5d9-51fd-4283-848d-c14b89fe8e6c',
            fk_id_model: 'bf0887d5-e91f-43ff-837b-f74103a88791',
        }
    });

    console.log(result);
}

main();