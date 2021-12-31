export const enum Ordering {
    Left = -1,
    Eq,
    Right,
}

export type Comparator<T> = (a: T, b: T) => Ordering;