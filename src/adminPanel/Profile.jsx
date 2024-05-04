import React, { useState, useEffect, useRef } from "react";
import { Image, Button, Input } from "@nextui-org/react";
import { useAuth } from "../utils/AuthContext";
import { TbCameraPlus } from "react-icons/tb";
import { FaRegSave, FaUserNinja } from "react-icons/fa";
import userIcon from "../assets/profile/userIcon.png"

function Profile() {
  const { user, uploadProfilePicture, allFiles, viewProfilePicture } = useAuth();
  const [filePreviewUrl, setFilePreviewUrl] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      const filePreview = await viewProfilePicture(
        localStorage.getItem("profilePicture")
      );
      setFilePreviewUrl(filePreview);
  
    };
    fetchProfilePicture();
  }, [viewProfilePicture]);

  const handleProfilePictureUpload = async () => {
    const fileInput = document.getElementById("profilePicture").files[0];
    await uploadProfilePicture(fileInput);
  };


  window.addEventListener("load", async () => {
allFiles()
  })
  // file upload code ends here

  return (
    <>
      <div className="flex justify-center py-10 gap-x-5 px-10 shadow-[0px_0px_5px_5px_rgba(59,130,246,0.1)] rounded-3xl my-10 mx-36">
        <div className="flex flex-col items-center justify-center p-10 rounded-3xl shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] basis-1/3">
          <div className="relative">
          <Image
                ref={imageRef}
                src={filePreviewUrl}
                id="uploadedProfilePicture"
                isBlurred
                isZoomed
                width={250}
                alt="Profile Picture"
                className="aspect-[3/4] object-cover"
              />
            <input
              type={"file"}
              id={"profilePicture"}
              hidden
              onChange={handleProfilePictureUpload}
            />
            <label htmlFor={"profilePicture"}>
              <TbCameraPlus className="absolute right-3 bottom-2 text-2xl z-10 cursor-pointer" />
            </label>
          </div>
          <div className="my-3 text-center">
            <p className="text-2xl">{`${user.name} | ${user.labels}`}</p>
            <p className="text-gray-400">{`${user.email}`}</p>
          </div>
          <Button
            onClick={handleProfilePictureUpload}
            color="warning"
            variant="flat"
            size="lg"
            fullWidth
            className=" border-2 border-yellow-400 max-w-max px-28"
          >
            Save
            <FaRegSave />
          </Button>
        </div>
        <div className="flex flex-col gap-y-5 px-16 py-8 rounded-3xl shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] basis-2/3">
          <code className="text-center text-3xl">
            {"<Edit Your Details />"}
          </code>
          <Input
            type="name"
            color="primary"
            label="Name"
            placeholder="Enter your name"
          />
          <Input
            type="email"
            color="primary"
            label="Email"
            placeholder="Enter your email"
            autoComplete="off"
          />
          <Input
            type="text"
            color="primary"
            label="Mobile Number"
            placeholder="Enter your mobile number"
          />
          <Input
            color="primary"
            type="password"
            label="Password"
            placeholder="Enter your password"
            autoComplete={"off"}
          />
          <Input
            color="primary"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
