export class FaceSnap {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public imageUrl: string,
    public snaps: number,
    public createdDate: Date,
    public location?: string
  ) {}
  
}
