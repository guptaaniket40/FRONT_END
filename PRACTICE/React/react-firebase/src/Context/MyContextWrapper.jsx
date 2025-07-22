import React, { useEffect, useState } from 'react';
import { firestoreDB } from '../Firebase/firebase';
import MyContext from './MyContext';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function MyContextWrapper(props) {
  //defining state for storing single 'user' object from database or array
  const [user, setuser] = useState({
    department: "",
    email: "",
    image: "",
    jobTitle: "",
    name: "",
    position: "",
    status: ""
  });

  //defining array of users to store all the 'user' objects from database
  const [allUsers, setallusers] = useState([]);
  const navigate = useNavigate();

  // Function to fetch users from Firestore database in real-time
  const getUsers = () => {
    try {
      // Create a query reference to the 'users' collection in the Firestore database
      const q = query(collection(firestoreDB, 'users'));

      // onSnapshot sets up a real-time listener for changes in the 'users' collection
      // It runs the callback every time the data is added, modified, or removed
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {

        // Loop through each document in the snapshot and map its data into an array
        // Spread all document data using ...doc.data(), and add the document's ID as `id`
        const userArray = QuerySnapshot.docs.map((doc) => ({
          ...doc.data(),   // Spread all fields from the Firestore document
          id: doc.id       // Attach the unique document ID (used for key/reference)
        }));

        // Update the component state (or context) with the new array of users
        setallusers(userArray);
      });

      return unsubscribe;

    } catch (error) {
      // If there is any error during query or snapshot subscription, log it to the console
      console.log(error);
      toast.error(error);

      // Return a no-op function in case of error to prevent crash in cleanup
      // Just a fail safe check that prevents app from crashing in case the 
      // something goes wrong in try block and when useeffect calls getUser it will return
      // still return unsubscribe but it will be undefined and useeffect will give error
      // that unsubscribe is not defined
      return () => { };
    }
  };


  //calling this once to get all data
  useEffect(() => {
    const unsubscribe = getUsers(); // Get the unsubscribe function

    return () => {
      unsubscribe(); // Clean up the real-time listener
    };
  }, []);

  // Add user to the database after basic validation
  const addUser = async () => {
    //destructuring
    const { department, email, image, jobTitle, name, position, status } = user;

    if (!department.trim() || !email.trim() || !image.trim() || !jobTitle.trim() || !name.trim() || !position.trim() || !status.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      // add user object to the collection named 'users'
      await addDoc(collection(firestoreDB, "users"), user);
      toast.success("User added successfully");
      setuser({
        department: "",
        email: "",
        image: "",
        jobTitle: "",
        name: "",
        position: "",
        status: ""
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  // Delete user from database
  const deleteUser = async (item) => {
    try {
      // delete the document in 'users' collection, whose id == item.id
      await deleteDoc(doc(firestoreDB, "users", item.id));
      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  // Prepare for editing
  // You must call this function before calling the editUser function
  const editUserHandler = (item) => {
    setuser(item);
  };

  // Save edited user to database
  const editUser = async () => {
    //destructuring
    const { department, email, image, jobTitle, name, position, status } = user;

    //return if any of the field is empty
    if (!department.trim() || !email.trim() || !image.trim() || !jobTitle.trim() || !name.trim() || !position.trim() || !status.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      // insert current user object in 'users' collection in database
      // where document id == user.id
      await setDoc(doc(firestoreDB, 'users', user.id), user);
      toast.success("User updated successfully");

      setuser({       //reset the global state for single user after successful insert
        department: "",
        email: "",
        image: "",
        jobTitle: "",
        name: "",
        position: "",
        status: ""
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        getUsers,
        addUser,
        user,
        setuser,
        allUsers,
        deleteUser,
        editUser,
        editUserHandler
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContextWrapper;