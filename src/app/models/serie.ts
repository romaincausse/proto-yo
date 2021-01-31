import {Comment} from './comment';

export class Serie {
  constructor(
    public id: number = null,
    public name: string = '',
    public firstReleaseDate: string = '',
    public seasonsNumber: number = 0,
    public description: string = '',
    public  review: string = '',
    public photo?: string,
    public comments?: Comment[]
  ) {
  }
}
