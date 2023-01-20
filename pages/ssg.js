import Link from "next/link";

export default function Ssg({ currentTime }) {
  return (
    <>
      <main>
        <h1>
          SSG はビルド時にレンダリングされるためアクセスする度に時刻が変わらない
        </h1>
        <div>{currentTime}</div>

        <Link href="ssr">ssr</Link>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const currentTime = new Date().toISOString();

  return {
    props: {
      currentTime,
    },
  };
};
