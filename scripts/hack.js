/** @param {NS} ns **/
export async function main(ns) {
    const target = ns.args[0];
    while (true) {
        const securityThreshold = ns.getServerMinSecurityLevel(target) + 5;
        const moneyThreshold = ns.getServerMaxMoney(target) * 0.75;

        if (ns.getServerSecurityLevel(target) > securityThreshold) {
            ns.toast("Weakening " + target + " due to high security level.");
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThreshold) {
            ns.print("Growing " + target + " due to low available money.");
            await ns.grow(target);
        } else {
            ns.print("Hacking " + target + ".");
            const hackedAmount = await ns.hack(target);
            const formattedAmount = Number(hackedAmount.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 });
            ns.toast(`Hacked \$${formattedAmount} from ${target} through ${ns.args[0]}.`, "success", 5000);
        }
    }
}