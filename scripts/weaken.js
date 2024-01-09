/** @param {NS} ns */
export async function main(ns) {
  const LIMIT = 10;
  const SERVER_NAME = 'joesguns';
  let x = 0;

  while (x <= LIMIT) {
    await ns.weaken(SERVER_NAME);
    x++;
  }
}
