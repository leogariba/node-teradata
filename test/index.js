const teradata = require("./db")

let selectContribuinte = (cnpj) => {
    let sql = `SELECT * FROM P_ACCDB.DIM_PESSOA WHERE NU_CNPJ = ${cnpj}`;
    return teradata.teradata.read(sql);
};

selectContribuinte(10925759000139)
.then(contribuinte=>{
    console.log(contribuinte)
})