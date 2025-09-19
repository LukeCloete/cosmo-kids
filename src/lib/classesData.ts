import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebaseConfig";

export interface Class {
  id: string;
  ageRange: string;
  classname: string;
  description: string;
  imageUrl: string;
}

export const getClasses = async (): Promise<Class[]> => {
  const classesCollection = collection(db, "classes");
  const q = query(classesCollection, orderBy("ageRange"));
  const classesSnapshot = await getDocs(q);
  const classesList = classesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Class[];
  return classesList;
};
