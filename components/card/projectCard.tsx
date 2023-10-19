import { Card, Space, Button, Avatar, Col, Row } from 'antd';

const ProjectCard = () => {
  return (
    <Card style={{ height: '14rem' }}>
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <Row>
          <Col span={4}>
            <Avatar />
          </Col>
          <Col span={20}>
            <h3>Project Title</h3>
          </Col>
        </Row>

        <h5>Last Updated: today</h5>
        <p>
          Voluptate id sit culpa ex veniam sit excepteur id exercitation dolore
          velit commodo.t
        </p>
        <Button type="primary">Open Project</Button>
      </Space>
    </Card>
  );
};
export default ProjectCard;
