import {Comment} from './comment';

export class Serie {
  constructor(
    public  id: number,
    public name: string,
    public firstReleaseDate: string,
    public seasonsNumber: number,
    public description: string,
    public  review: string,
    public photo?: string,
    public comments?: Comment[]
  ) {
  }
}
