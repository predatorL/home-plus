import useSWR from "swr";
import {  getRecipes } from '../../apis/recipes';
import dayjs from 'dayjs';
import { Col, Card, Row } from 'antd';
import {
  useNavigate
} from "react-router-dom";

const { Meta } = Card;

function RecipeListItem ({data, handleClick}) {
  const { attributes } = data;
  const clsPre = 'recipe_item';
  const onClick = () => {
    handleClick(data);
  }
  return (
    <Card
      hoverable
      onClick={onClick}
      style={{ width: 240 }}
      cover={<img alt="example" src={attributes.coverIamge || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
    >
      <Meta title={attributes.name} description={attributes.description} />
    </Card>
  )
}

function Page() {
  const { data, error, isLoading } = useSWR("/api/user/123", getRecipes)
  console.log(data, error, isLoading )
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/detail?id=${data.id}`)
  }
  return (
    <div className='recipe-list'>
      <Row gutter={16}>
        {
          data?.data?.map((item) => {
            return (
              <Col key={item.id} className="gutter-row" span={12}>
                <RecipeListItem key={item.id} data={item} handleClick={handleClick} />
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default Page
