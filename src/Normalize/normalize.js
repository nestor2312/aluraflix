export const normalizeClassName = (name) => {
    return name.toLowerCase().replace(/ /g, '-').replace(/[áéíóúñ]/g, match => {
      const replacements = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n' };
      return replacements[match];
    });
  };