import { Request } from 'infrastructure/Request'
import { IResource } from 'infrastructure/Resource'

type Data<T> = T | undefined

export abstract class Resource<T> implements IResource<T> {
  name: string | undefined
  data: Data<T>
  constructor(fetcher: Request) {}
  abstract getData(): Data<T>
}
