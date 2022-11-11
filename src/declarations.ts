export type Query = Record<string, unknown>

export interface Repository<T = unknown> {
  create(data: T, query?: Query): Promise<T>
}

export interface User {
  name: string
  username: string
  sex: string
}
