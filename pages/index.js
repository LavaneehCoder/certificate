import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const extension = "421687d8-062f-4171-bb80-e04b953212aefd";
  const router = useRouter();

  useEffect(() => {
    router.replace(
      `/course/previewCourseCompletionCertificate/?code=${extension}`
    );
  });
  return <></>;
};

export default Index;
