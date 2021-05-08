type Data<T> = T | undefined

export interface IResource<T> {
  name: string | undefined
  data: Data<T>
  getData(): Data<T>
}
