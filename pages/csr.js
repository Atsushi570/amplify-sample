export default function Csr() {
  const currentTime = new Date().toISOString();
  return (
    <>
      <main>
        <h1>
          CSR
          HTMLはビルド時に生成されているためサーバから受け取るHTMLの時刻は一定だが、その後にクライアントで更新されるため表示される時刻はアクセスするたびに変わる
        </h1>
        <div>{currentTime}</div>
      </main>
    </>
  );
}
