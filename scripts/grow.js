/** @param {NS} ns */
export async function main(ns) {
    const LIMIT = ns.args[1];
    const SERVER_NAME = ns.args[0];
    let x = 0;

    while (x <= LIMIT) {
        await ns.grow(SERVER_NAME);
        x++;
    }
}