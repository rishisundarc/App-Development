import perfume from '../pictures/fragrance.png';
import loca from '../pictures/location.png';
import { Col, Divider, Row } from 'antd';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import { ShoppingCartOutlined } from '@ant-design/icons';
import '../../src/assests/css/DashboardContent.css'
import BarChart from './chart';


function DashboardContent() {
    
    const user = useSelector(selectUser);
    const userEmail = user.user && user.user.email ? user.user.email : 'Guest';

    return (
        <>
            <span>Welcome, {userEmail}!</span>
            <Divider orientation="left"></Divider>
            <Row justify="space-evenly" gutter={[32, 16]}>
                <ShoppingCartOutlined style={{ fontSize: '52px' }} /><br /><br /><Col flex="auto">TOTAL ORDER<br />1234</Col>
                <LocalShippingOutlinedIcon style={{ fontSize: '52px' }} /><Col flex="auto">Out For Delivery<br />1235</Col>
                <img src={perfume} className='perfume' alt='perfume' /><Col flex="auto">Total Fragrance<br />500</Col>
                <img src={loca} className='user' alt='user' /><Col flex="auto">Community Activity<br />1500</Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <BarChart />
        </>
    )
}

export default DashboardContent;