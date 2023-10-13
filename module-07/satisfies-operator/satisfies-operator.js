"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    localNascimento: "Rio de Janeiro",
    residenciaAtual: { x: 10, y: 20 },
};
console.log(pessoa.localNascimento.toUpperCase());
const config = {
    host: "localhost",
    port: 3306,
    tryReconnect: () => true,
    poolSize: 10,
};
function connect() {
    let { host, port, tryReconnect } = config;
    createConnection(host, `${port}`, tryReconnect(), 10);
}
