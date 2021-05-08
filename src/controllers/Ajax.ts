import { Request } from 'infrastructure/Request'
import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

type Params = { [key: string]: string }
type Options = { headers?: Object }
type Config = { options?: Options; params?: Params; key?: string }

export class Ajax extends Request {
  protected options: Options = {
    headers: { 'Content-Type': 'application/json' },
  }
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
    const $obs = ajax.getJSON(url, this.options.headers)

    return new Promise((resolve) => {
      $obs.subscribe((resp) => resolve(resp))
    })
  }
  mutation() {
    return false
  }
}
