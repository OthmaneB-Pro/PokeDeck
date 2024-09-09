export function removeAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const calculateGlobalId = (
  localId: number,
  generation: number
): number => {
  const offsetPerGeneration: { [key: number]: number } = {
    1: 0,
    2: 151,
    3: 251,
    4: 386,
    5: 493,
    6: 649,
    7: 721,
    8: 809,
    9: 905,
  };

  return offsetPerGeneration[generation] + localId;
};
