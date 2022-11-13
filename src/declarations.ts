export type Query = Record<string, unknown>

export type Id = string | number

export interface Repository<T = unknown> {
  create(data: T, query?: Query): Promise<T>
  get(id: Id, query?: Query): Promise<T>
  // Other methods...
}

export interface User {
  id: string
  name: string
  username: string
  sex: string
}
