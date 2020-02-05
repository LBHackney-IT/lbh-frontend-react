export const getInputId = (
  input: { id?: string; value: string },
  idPrefix: string
): string => {
  let id;
  if (input.id) {
    id = input.id;
  } else {
    id = `${idPrefix}-${input.value.replace(/\s+/g, "-").toLowerCase()}`;
  }
  return id;
};
