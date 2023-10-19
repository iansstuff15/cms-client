import ProjectCard from '@/components/card/projectCard';
import { Row, Col, Card, Divider, Button, Space } from 'antd';
import { AiFillPlusCircle } from 'react-icons/ai';
export default function Dashboard() {
  return (
    <main>
      <Row>
        <Col span={20}>
          <h1>Dashboard</h1>
        </Col>
        <Col span={4}>
          <Button type="primary" block icon={<AiFillPlusCircle />}>
            Create New Project
          </Button>
        </Col>
      </Row>

      <Divider>recently opened projects</Divider>
      <Row gutter={{ xs: 4, sm: 6, md: 8, lg: 10 }}>
        <Col className="gutter-row" span={6}>
          <ProjectCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ProjectCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ProjectCard />
        </Col>
        <Col className="gutter-row" span={6}>
          <ProjectCard />
        </Col>
      </Row>
    </main>
  );
}
