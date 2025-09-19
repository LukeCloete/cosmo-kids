import { app, db } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export const getGalleryImages = async () => {
  try {
    const galleryCollection = collection(db, "gallery");
    const q = query(galleryCollection);
    const gallerySnapshot = await getDocs(q);
    const galleryList = gallerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched gallery images: ", galleryList);
    return galleryList;
  } catch (error) {
    console.error("Error fetching gallery images: ", error);
    return [];
  }
};

interface Filters {
  tags?: string[];
  searchTerm?: string;
}

interface Article {
  id: string;
  title: string;
  // You can add other fields that your articles have
}

export const getFilteredData = async (filters: Filters) => {
  try {
    const db = getFirestore(app);

    const dataCollection = collection(db, "articles");

    let q = query(dataCollection);

    if (filters.tags && filters.tags.length > 0) {
      q = query(q, where("tags", "array-contains-any", filters.tags));
    }

    const dataSnapshot = await getDocs(q);
    let dataList: Article[] = dataSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Article, "id">),
    }));

    if (filters.searchTerm) {
      dataList = dataList.filter((item: Article) =>
        item.title?.toLowerCase().includes(filters.searchTerm!.toLowerCase())
      );
    }

    return dataList;
  } catch (error) {
    console.error("Error fetching filtered data: ", error);
    return [];
  }
};
