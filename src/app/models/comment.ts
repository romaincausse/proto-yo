export class Comment {
  constructor(
    public id: number,
    public date: string,
    public author: string,
    public content: string,
    public serieId: number
  ) {
  }
}
