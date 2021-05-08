import { VideoModel } from 'infrastructure/models/Video'
import { Resource } from './Resource'
import { Request } from 'infrastructure/Request'

type Data<T> = T | undefined

export class Video extends Resource<VideoModel> {
  public data: Data<VideoModel>
  public name: string
  constructor(public id: string) {
    super(new Request())
    this.name = 'videos'
  }

  getData() {
    const params = { id: this.id, part: 'player' }

    return this.fetcher
      .query(this.name, params)
      .then(({ items }: any) => {
        return items[0].player.embedHtml
      })
      .catch((err: Error) => {
        throw err
      })
  }
}
