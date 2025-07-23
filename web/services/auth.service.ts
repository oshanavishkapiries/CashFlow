import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "@/configs/firebase.config";
import { doc, setDoc } from "firebase/firestore";

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!user) {
      throw new Error("User not found");
    }

    // Save user to Firestore with proper error handling
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    });

    console.log("User successfully saved to Firestore");
    return result;
  } catch (error) {
    console.error("Error during sign in or saving user:", error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error during sign out:", error);
    throw error;
  }
};
