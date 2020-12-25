// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function verifyNodeVersion() {
    const REQUIRED_NODE_VERSION = "15.0.0";
    const requiredParts = REQUIRED_NODE_VERSION.split(".").map(v => parseInt(v, 10));
    const actualVersionParts = process.versions.node.split(".").map(v => parseInt(v, 10));
    for (const [i, part] of actualVersionParts.entries()) {
        if (part > requiredParts[i]) break;
        if (part === requiredParts[i]) break;
        throw new Error(`Error: Unsupported Node.js version! Must be at least ${REQUIRED_NODE_VERSION}`);
    }
}