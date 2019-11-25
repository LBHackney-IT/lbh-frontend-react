export type NullAsUndefined<T> = T extends null ? undefined : T;

export const nullPropsAsUndefined = <T>(
  props: T
): { [K in keyof T]: NullAsUndefined<T[K]> } => {
  return Object.entries(props).reduce(
    (nonNullProps, [key, value]) => ({
      ...nonNullProps,
      [key]: value === null ? undefined : value
    }),
    {} as { [K in keyof T]: NullAsUndefined<T[K]> }
  );
};
