import { firestore } from "./firestore";

export const getProdcuts = async () => {
    const collectionRef = firestore.collection("gym");

    const data = await collectionRef.get();
    console.log(data);

    const rawDocuments = data.docs;
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    return cleanedDocuments;
};

export const getProductById = async (id) => {
    const collectionRef = firestore.collection("gym");

    const docRef = collectionRef.doc(id);

    const rawDoc = await docRef.get();

    return { id: rawDoc.id, ...rawDoc.data() };
};

export const updateProduct = async (id, record) => {
    const collectionRef = firestore.collection("gym");
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};
