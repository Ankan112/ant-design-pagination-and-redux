import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../Api/userApi";
import { Card } from "antd";

const { Meta } = Card;

const User = () => {
  const params = useParams();
  const id = params.id;
  const { data: product } = useGetSingleProductQuery(id);

  return (
    <div className="main-container">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={product?.images[0]} />}
      >
        <Meta title={product?.title} description={product?.description} />
      </Card>
    </div>
  );
};

export default User;
