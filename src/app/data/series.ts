import {Serie} from '../models/serie';

export const seriesData: Serie[] = [
  {
    id: 1,
    name: 'abc',
    review: 'la revue',
    seasonsNumber: 10,
    photo: '',
    description: 'description 1',
    firstReleaseDate: '10/01/2014',
    comments: [
      {
        id: 1,
        author: 'toto',
        content: 'contenu commentaire',
        date: '12/10/2020'
      },
      {
        id: 2,
        author: 'tata',
        content: 'contenu commentaire n 2',
        date: '14/10/2020'
      }
    ],
  },
  {
    id: 2,
    name: 'def',
    review: 'une autre revue',
    seasonsNumber: 4,
    photo: '',
    description: 'description 3',
    firstReleaseDate: '10/01/2016',
    comments: [
      {
        id: 3,
        author: 'toto',
        content: 'contenu commentaire 3',
        date: '12/10/2020'
      },
      {
        id: 4,
        author: 'tata',
        content: 'contenu commentaire n 5',
        date: '14/10/2020'
      }
    ],
  }
];
