type Params = { [key: string]: string }

type Options = { headers?: any }

export abstract class Request {
  protected options: Options = {}
  protected params: Params = {}
  protected api_key: string | undefined

  constructor(protected baseUrl: string) {}

  abstract query(endpoint: string, params: any): any
  abstract mutation(endpoint: string, payload: any): any

  setOptions(options: Options): void {
    this.options = options
  }

  getUrl(endpoint: string): string {
    let url = `${this.baseUrl}/${endpoint}`

    if (this.params) {
      Object.keys(this.params).forEach((key, i) => {
        url =
          i === 0
            ? `${url}?${key}=${this.params[key]}`
            : `${url}&${key}=${this.params[key]}`
      })
    }
    return url
  }

  setParams(params: Params) {
    this.params = this.api_key ? { key: this.api_key, ...params } : params
  }
}
