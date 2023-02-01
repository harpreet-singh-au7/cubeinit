import EmployeesPerDept from "./charts/EmployeePerDept";
import EmployeePerGender from "./charts/EmployeePerGender";
import EmployeePerBirthYear from "./charts/EmployeePerBirthYear";
import EmployeePerHireYear from "./charts/EmployeePerHireYear";

import { Row, Col, Typography, Layout, Statistic, Table } from "antd";
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header></Header>
      <Content style={{ padding: "0 50px" }}>
        <Title level={1} style={{ padding: "20px 0" }}>
          My Recharts Dashboard built with Cube!
        </Title>
        <Row>
          <Col span={12} style={{ padding: "10px" }}>
            <Title level={3}>Employee Count Per Department</Title>
            <EmployeesPerDept />
          </Col>
          <Col span={12} style={{ padding: "10px" }}>
            <Title level={3}>Employee Count Per Gender</Title>
            <EmployeePerGender />
          </Col>
          <Col span={12} style={{ padding: "10px" }}>
            <Title level={3}>Employee Count Per Birth Date</Title>
            <EmployeePerBirthYear />
          </Col>
          <Col span={12} style={{ padding: "10px" }}>
            <Title level={3}>Employee Count Per Hire Date</Title>
            <EmployeePerHireYear />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
