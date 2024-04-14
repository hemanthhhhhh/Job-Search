import { useState } from "react";
import Header from "../components/Header";
import { Typography, styled, Box, TextField, Button } from '@mui/material';
import Dropdown from "../components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";

const Component = styled(Box)({
    background: '#F5F5F5',
    padding: '80px 200px'
})

const Container = styled(Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p': {
        fontSize: 35,
        fontWeight: 700
    }
})

const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *': {
        marginTop: '20px !important'
    }
})

const defaultObj = {
    profile: '',
    type: '',
    description: '',
    experience: '',
    technology: [],
    salary: ''
}

const options = {
    type: ['Online', 'Offline'],
    experience: ['0-2 Years', '3-5 Years', '5 Years or more'],
    technology: ['Java', 'JavaScript', 'React', 'Angular', 'Node.js', 'Docker', 'AWS', 'HTML', 'CSS'],
    salary: ['Rs 0-300000', 'Rs 300000-500000', 'Rs 500000-800000', 'Rs 800000-1000000', 'Rs 1000000-1500000', 'Rs 1500000-2000000', 'Rs 2000000 or more']
}

const CreatePost = () => {
    const [data, setData] = useState(defaultObj);

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const saveJob = async () => {
        await savePost(data);
        navigate(routePath.posts);
    }

    return (
        <>
            <Header />
            <Component>
                <Container>
                    <Typography>Create a job post</Typography>
                    <img src={image} alt="create" />
                </Container>
                <FormWrapper>
                    <TextField
                        placeholder="Job title"
                        onChange={handleChange}
                        name="profile"
                    />
                    <Dropdown 
                        id='job-type-label'
                        value={data.type}
                        handleChange={handleChange}
                        name="type"
                        label="Job Type"
                        options={options.type}
                    />
                    <TextField
                        placeholder="Job description"
                        onChange={handleChange}
                        name="description"
                    />
                    <Dropdown 
                        id='experience-label'
                        value={data.experience}
                        handleChange={handleChange}
                        name="experience"
                        label="Experience"
                        options={options.experience}
                    />
                    <Dropdown 
                        id='technology-label'
                        value={data.technology}
                        handleChange={handleChange}
                        name="technology"
                        label="Technology"
                        options={options.technology}
                        multiple
                    />
                    <Dropdown 
                        id='salary-label'
                        value={data.salary}
                        handleChange={handleChange}
                        name="salary"
                        label="Salary"
                        options={options.salary}
                    />
                    <Button variant="contained" onClick={() => saveJob()}>Save Job</Button>
                </FormWrapper>
            </Component>
        </>
    )
}

export default CreatePost;
// import {Box, Typography, styled, TextField, Button} from '@mui/material'
// import Dropdoown from "../components/Dropdown";
// import { useState } from "react";

// const Component = styled(Box) ({
//     padding: '80px 200px',
//     background: '#F5F5F5'
// })
// const Container = styled(Box) ({
//     display: 'flex',
//     background: "#FFFFFF",
//     borderRadius: 20,
//     justifyContent: 'space-between',
//     alignItems: "center",
//     padding: '0 70px',
//     '& > p': {
//         fontSize: 15,
//         fontWeight: 700,
//         opacity: '.7'
//     }
// })
// const Formwrapper = styled(Box) ({
//     display: "flex",
//     flexDirection: "column",
//     marginTop: 20,
//     padding: 20,
//     background: "#FFFFFF",
//     borderRadius: 20,
//     '& > *': {
//         marginTop: '20px !important'
//     }
// })
// const defaultObj = {
//     profile:"",
//     type:"",
//     description:"",
//     experience:"",
//     technology: [],
//     salary:""
// }
// const options = {
//     type: ["Online", "Offline"],
//     Experience: ["0-2 Years", "3-5 Years", "5-8 Years", "8 and more years"],
//     technology: ["Java", "Javascript", "Angular", "React", "Node js", "Docker", "AWS", "HTML", "CSS", "C", "C++", "C#", "Python", "Ruby", "R"],
//     salary: ["$ 0-30000", "$ 30000-50000", "$ 50000-70000", "$ 70000-100000", "$ 100000 and more"]
// }
// const CreatePost = () => {
//     const [data, setData] = useState(defaultObj);

//     const handleChange = (e) => {
//         setData({...data, [e.target.name] : e.target.value})
//     }
//     const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";
//     return (
//         <>
//             <Header/>
//             <Component>
//                 <Container>
//                     <Typography>Create a job post</Typography>
//                     <img src={image} alt="create"/>
//                 </Container>
//                 <Formwrapper>
//                     <TextField
//                     placeholder="Job title"
//                     name="profile"
//                     />
//                     <Dropdoown
//                     label="Job type" 
//                     id="job-type-id"
//                     value={data.type}
//                     handleChange={handleChange}
//                     name="type"
//                     options={options.type}
//                     />
//                     <TextField
//                     placeholder="Job descripion"
//                     name="description"
//                     onChange={handleChange}
//                     />
//                     <Dropdoown name="experience"
//                     label="Experience" 
//                     id="job-experience-label"
//                     value={data.experience}
//                     handleChange={handleChange}
//                     name="experience"
//                     options={options.experience}
//                     />
//                     <Dropdoown name="technology"
//                     label="Technology" 
//                     id="job-technology-label"
//                     value={data.technology}
//                     handleChange={handleChange}
//                     name="technology"
//                     options={options.technology}
//                     />
//                     <Dropdoown name="salary"
//                     label="Salary" 
//                     id="job-salary-label"
//                     value={data.salary}
//                     handleChange={handleChange}
//                     name="salary"
//                     options={options.salary}
//                     />
//                     <Button variant="contained">Save Job</Button>
//                 </Formwrapper>
//             </Component>
//         </>
//     )
// }

// export default CreatePost;