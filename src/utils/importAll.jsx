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
/* 
export const importWebp = (requireContext) =>
  requireContext.keys().reduce((acc, next) => {
    const match = next.match(/\/([\w\d-_]+)\.(jpg|webp)$/);
    if (match) {
      const [, imageName, extension] = match;
      acc[imageName] = requireContext(next).default;
    }
    return acc;
  }, {}); */