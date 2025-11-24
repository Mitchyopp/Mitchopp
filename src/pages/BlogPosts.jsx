import { useParams } from "react-router-dom";
import NixOS from "../blogs/NixOS.jsx";
import Colourschemes from "../blogs/Colourschemes.jsx";

const Blogs = {
  nixos: {
    title: "NixOS",
    component: <NixOS />,
  },
  colourschemes: {
    title: "Colourschemes",
    component: <Colourschemes />,
  },
};

function BlogPost() {
  const { slug } = useParams();
  const key = slug.toLowerCase();
  const blog = Blogs[key];

  if (!blog) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Error: 404</h1>
        <p>There's no blog called: {slug}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{blog.title}</h1>
      {blog.component}
    </div>
  );
}

export default BlogPost;
