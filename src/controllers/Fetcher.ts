import { Request } from 'infrastructure/Request'

type Params = { [key: string]: string }
type Options = { headers?: any }
type Config = { options?: Options; params?: Params; key?: string }

export class Fetcher extends Request {
  protected options: Options = {
    headers: { 'Content-Type': 'application/json' },
  }
  protected params: Params = {}

  constructor(baseUrl: string, { options, key, params }: Config) {
    super(baseUrl)
    options && this.setOptions(options)
    params && this.setParams(params)
    this.api_key = key
  }

  query(endpoint: string, params: Params) {
    this.setParams(params)
    const url = this.getUrl(endpoint)
    this.setParams({})

    return fetch(url, this.options).then((resp) => resp.json())
  }
  mutation(endpoint: string, payload: string) {
    return fetch(this.getUrl(endpoint), {
      method: 'post',
      body: payload,
      ...this.options,
    }).then((resp) => resp.json())
  }
}
