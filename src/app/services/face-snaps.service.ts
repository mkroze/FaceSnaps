import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    new FaceSnap(
      1,
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      2,
      new Date(),
      'Paris'
    ),
    new FaceSnap(
      2,
      'Picsou',
      "Mon modele d'epanouissement financier",
      'https://images.unsplash.com/photo-1604883781269-d121d9ad20f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYWxkJTIwZHVja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      19,
      new Date()
    ),
    new FaceSnap(
      3,
      'Kratos',
      "Un mortel qui defia l'Olympe",
      'https://images.unsplash.com/photo-1552820755-733e038f86d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8emV1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      666,
      new Date()
    ),
  ];
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }
  
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
