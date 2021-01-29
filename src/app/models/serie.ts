import {Comment} from './comment';

export class Serie {
  id: number;
  name: string;
  firstReleaseDate: string;
  seasonsNumber: number;
  description: string;
  review: string;
  photo: string;
  comments: Comment[];
}
