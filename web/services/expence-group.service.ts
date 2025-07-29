import { auth, db } from "@/configs/firebase.config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

// create expence group
export const createExpenceGroup = async (data: {
  mode: "me" | "group";
  title: string;
  emoji: string;
}) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not found");
    }

    const expenceGroupRef = await addDoc(collection(db, "expence-groups"), {
      ...data,
      userId: user.uid,
      createdAt: new Date(),
    });

    return expenceGroupRef;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// get all expence groups
export const getAllExpenceGroups = async () => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error("User not found");
        }
        const expenceGroupRef = collection(db, "expence-groups");
        const q = query(expenceGroupRef, where("userId", "==", user.uid));
        const snapshot = await getDocs(q);
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error(error);
        throw error;
    }
}
