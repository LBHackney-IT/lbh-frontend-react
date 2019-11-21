export const nullAsUndefined = <T>(prop: T): NonNullable<T> | undefined =>
  prop === null ? undefined : (prop as NonNullable<T>);
