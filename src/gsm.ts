export function getGSMEndpoint(endpoint: string) {
    if (
        window.location.port === '4173' ||
        window.location.port === '5174'
    ) {
        return 'http://localhost:' + 55000 + endpoint;
    }
    return endpoint;
}