const Ssr = ({ currentTime }) => {
  return (
    <>
      <h1>
        SSR はリクエスト時にレンダリングされるためアクセスする度に時刻が変わる
      </h1>
      <div>{currentTime}</div>
    </>
  );
};

export const getServerSideProps = async () => {
  const currentTime = new Date().toISOString();

  return {
    props: {
      currentTime,
    },
  };
};

export default Ssr;
