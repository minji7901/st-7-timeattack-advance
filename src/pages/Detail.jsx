import { useNavigate, useParams } from "react-router-dom";
import { useTodoQuery } from "../hooks/useTodoQuery";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 필수: useQuery 로 리팩터링 하세요.
  // 선택: useQuery 로 리팩터링 후, useTodoQuery 커스텀훅으로 정리해 보세요.

  const { data, error, isPending } = useTodoQuery(id)
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchDetail = async () => {
  //     try {
  //       const response = await todoApi(`/todos/${id}`);
  //       setData(response.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchDetail();
  // }, [id]);

  if (isPending) return <div style={{ fontSize: 36 }}>로딩중...</div>;
  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <p>제목: {data.title}</p>
      <p>내용: {data.contents}</p>
      <p>작성일자: {new Date(data.createdAt).toDateString()}</p>
    </div>
  );
}
