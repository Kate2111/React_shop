export const importSvg = (requireContext) => requireContext.keys().reduce((acc, next) => {
    acc[next.replace("./", "").replace(".svg", "")] = requireContext(next);
    return acc;
}, {}); 

export const importPng = (requireContext) => requireContext.keys().reduce((acc, next) => {
    acc[next.replace("./", "").replace(".png", "")] = requireContext(next);
    return acc;
}, {}); 


export const importWebp = (requireContext) => requireContext.keys().reduce((acc, next) => {
    acc[next.replace("./", "").replace(/\.(jpg|webp)$/, "")] = requireContext(next);
    return acc;
}, {});
