export const parseHref = (link) => {
    const currentPath = link.href.match(/^\/([a-z]+\/)/);
    return currentPath ? currentPath[1] : '';
}