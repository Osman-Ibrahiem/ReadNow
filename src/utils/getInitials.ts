export function getInitials(name: string): string {
    const trimmed = name.trim();
    if (!trimmed) return '';

    const words = trimmed.split(/\s+/);
    if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
    }

    const capitals = trimmed.match(/[A-Z]/g);
    if (capitals && capitals.length >= 2) {
        return (capitals[0] + capitals[1]).toUpperCase();
    }

    return trimmed.slice(0, 2).toUpperCase();
}