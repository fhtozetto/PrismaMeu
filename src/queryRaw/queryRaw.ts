import { PrismaClient, Prisma, Courses } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.$queryRaw<Courses[]>(
        Prisma.sql`SELECT * FROM courses`
    )

    console.log(result);
    result.map((item) => console.log(item.name)); // resultado por usar a tipagem no $queryRaw
    
}

main();