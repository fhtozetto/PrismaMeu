import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let skip = 0;
let exists = true;

async function main() {
    while(exists) {
        const result = await prisma.courses.findMany({
            skip: skip,
            take: 2,
        });
        skip += 2;

        if (result.length <= 0) {
            exists = false;
        }

        console.log(result);
        console.log('-----------------');

    }
    
}

main();