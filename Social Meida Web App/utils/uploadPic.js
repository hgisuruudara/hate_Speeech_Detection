import axios from "axios";
import { Form } from "semantic-ui-react";

const uploadPic = async (media) => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "socialmedia"); //name of upload preset on cloudinary
    form.append("cloud_name", process.env.CLOUDINARY_CLOUDNAME);
    const res = await axios.post(process.env.CLOUDINARY_URL, form);
    return res.data.url; //url of uploaded image
  } catch (error) {
    return;
  }
};

export default uploadPic;
