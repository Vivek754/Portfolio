import {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { account, storage } from "../appwrite/appwriteConfig";
import config from "../config/config.js";
import { ID } from "appwrite";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const [user, setUser] = useState(false);
  const [error, setError] = useState(null);
  const [upadteProfilePictureID, setUpdateProfilePictureID] = useState(null);

  // Notification Starts

  const profileUpload = () => toast("Profile Picture Uploaded Successfully!");

  // Notofication Ends

  const checkUserStatus = useCallback(async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    checkUserStatus();
  }, [checkUserStatus]);

  const loginUser = useCallback(async (userInfo) => {
    setLoading(true);
    try {
      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  const logoutUser = useCallback(async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }, [navigate]);

  const registerUser = useCallback(
    async (userInfo) => {
      setLoading(true);
      try {
        await account.create(
          ID.unique(),
          userInfo.email,
          userInfo.password,
          userInfo.name
        );
        await account.createEmailPasswordSession(
          userInfo.email,
          userInfo.password
        );
        let accountDetails = await account.get();
        setUser(accountDetails);
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    },
    [navigate]
  );

  const uploadProfilePicture = useCallback(async (profilePictureBlob) => {
    try {
      const result = await storage.createFile(
        config.appwriteProfileBucketId,
        ID.unique(),
        profilePictureBlob
      );
      return toast("🦄 Profile Picture Uploaded Successfully!");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      return toast.error("🦄 Error Uploading Profile Picture!");
    }
  }, []);

  const allFiles = async () => {
    try {
      const result = await storage.listFiles(config.appwriteProfileBucketId);
      const profilePicture = result.files[0].$id;
      localStorage.setItem("profilePicture", profilePicture);
      return result;
    } catch (error) {
      console.error("Error getting files:", error);
    }
  };

  const viewProfilePicture = useCallback(async (viewPictureID) => {
    try {
      const filePreview = await storage.getFilePreview(
        config.appwriteProfileBucketId,
        viewPictureID
      );
      return filePreview;
    } catch (error) {
      console.error("Error getting profile picture:", error);
    }
  }, []);

  const contextData = {
    user,
    error,
    loginUser,
    logoutUser,
    registerUser,
    uploadProfilePicture,
    allFiles,
    viewProfilePicture,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
