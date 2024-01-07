import PageWithComments from "./PageWithComments";
import BlogpostContent from "./BlogpostContent";
const Blogpost = ({ params }) => {
  console.log("params this", params);
  return (
    <PageWithComments>
      <BlogpostContent blogPostId={params.blogPostId} />
    </PageWithComments>
  );
};

export default Blogpost;
