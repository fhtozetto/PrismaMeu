import { create } from './src/create';

async function main() {
    const result = create(400, 'Curso de Docker', 'Excelente curso de Docker')

    console.log(result);

}

main();