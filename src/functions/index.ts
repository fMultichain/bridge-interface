export * from "./formatAddress";
export * from "./getLibrary";
export * from "./styling";


export function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}