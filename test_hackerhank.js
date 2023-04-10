const axios = require("axios");
async function getCountryName(code) {
    let country = "NOT FOUND"; //guarda o país
    //Procura todas as paginas de países (25 paginas no total)
    for(let i = 1; i < 26; i++){
        const countries = await axios(`https://jsonmock.hackerrank.com/api/countries?page=${i}`);
        //percorre todos os países de todas as páginas
        countries.data.data.forEach(c => {
            //pega o país com a sigla informada
            if(code === c.alpha2Code) {
                country = c.name;
                return;
            }
            return;
        });
        //sai da iteração quando encontra o item
        if(country !== "NOT FOUND") break;
    }
    
    return country /*Retorna NOT FOUND se a sigla nao existe ou o país caso a sigla exista*/
}

async function main() {
    const country = await getCountryName("AF");
    console.log(country);
}

main();
