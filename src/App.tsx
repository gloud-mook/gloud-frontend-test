import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.ts";
import "./index.css";

function App() {
  const handleFetchData = async () => {
    const docRef = doc(db, "test", "aaaa");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("docSnap data : ", docSnap.data());
    } else {
      alert("Error");
    }

    console.log("click!!");
  };
  return (
    <>
      <div className="">
        <button className="text-purple-700 text-3xl font-bold" onClick={handleFetchData}>
          Click me! 😄
        </button>
      </div>
    </>
  );
}

export default App;
