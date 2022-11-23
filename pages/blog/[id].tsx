import { useRouter } from "next/router";

// components
import BlogPost from "../../components/BlogPost";
import Extra from "../../components/Extra";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {id && (
        <BlogPost
          artId={id}
        />
      )}
      <Extra />
    </>
  );
}
