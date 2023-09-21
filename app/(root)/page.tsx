import { fetchThreads } from "@/lib/actions/thread.actions";

const Home = async () => {
  const result = await fetchThreads(1, 30);
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
    </>
  );
};

export default Home;
