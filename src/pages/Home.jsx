import Header from "../components/Header";
import {Box, Typography, Button, styled} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { routePath } from "../routes/route";

const Component = styled(Box) ({
    display: "flex",
    height: "100vh",
    alignItems: "center",
    margin: "0 110px",
    '& > div' : {
        width: '50%',
        display: "flex",
        justifyContent : 'center',
        flexDirection: "column",
        '& > p' : {
            fontSize: 56,
            lineHeight: 1.25,
            letterSpacing: -1
        },
        '& > Button': {
            width: 220,
            height: 60,
            background: 'rgb(37, 87, 167)',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48,
            marginLeft: 210
        },
        '& > img': {
            borderRadius: 75
        }
    }
})
const Home = () => {
    const navigate = useNavigate()
    const animatedImage = "https://img.freepik.com/premium-vectoremployees-looking-job-using-magnifying-glass-searching-job-employment-job-vacancy-vector_667085-127.jpg"
    return (
        <div>
            <Header/>
            <Component>
                <Box>
                    <Typography>Let's make your next hire fast</Typography>
                    <Button onClick={() => navigate(routePath.create)} variant="contained">Post a job</Button>
                </Box>
                <Box>
                    <img src={animatedImage} alt="home" width={600} />
                </Box>
            </Component>
        </div>
    )
} 
export default Home;