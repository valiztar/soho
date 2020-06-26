import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  constructor(public fireservices: AngularFirestore) {}

  getAll() {
    return this.fireservices.collection("projects").snapshotChanges();
  }
}
