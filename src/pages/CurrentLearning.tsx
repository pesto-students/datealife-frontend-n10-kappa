import { Card, CardMedia, Layout, Boxed } from "../components";
import { CircularProgress, Container, Typography } from "@mui/material";
import { CURRENT_LEARNING_KEY } from "../const";
import { useDispatch, useSelector } from "react-redux";
import { fetchLearningRequest } from "../store/sagas/learning/actions";
import { useEffect } from "react";
import { getCurrentLearning } from "../store/reducers/learnings";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router";

const Learning = (): JSX.Element => {
    const dispatch = useDispatch();
    const currentLearning = useSelector(getCurrentLearning);
    const navigate = useNavigate();
    const { learningId } = useParams();
    useEffect(() => {
        const currentLearningContent = window.localStorage.getItem(CURRENT_LEARNING_KEY);
        if(typeof learningId === "string"){
            // if(currentLearningContent){
            //     alert("Yo");
            //     const parsedLearningContent = JSON.parse(currentLearningContent);
            //     if(parsedLearningContent && parsedLearningContent.id === learningId){
            //         currentLearning = parsedLearningContent;
            //         alert(currentLearning);
            //     }
            //     else{
            //         alert("Blow");

            //         dispatch(fetchLearningRequest({learningId: learningId}));
            //     }
            // } else {
            //     dispatch(fetchLearningRequest({learningId: learningId}));
            // }
            dispatch(fetchLearningRequest({learningId: learningId}));

        }
    }, []);
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Learning",
                backFunction: () => navigate("/learning")
            }}>
                {currentLearning ?
                    (<Card sx={{ p: "10px 0" }}>
                        <CardMedia
                            src={currentLearning.imgUrl}
                            alt={`${currentLearning.title} img`}
                            onError={(event: any) => {
                                if (event.target)
                                    event.target.src =
                                        "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                            }}
                            width={900}
                            height={300}
                        />
                        <Boxed type="learningPage">
                           <Container maxWidth="md">
                                <Typography variant="h4">{currentLearning.title}</Typography>
                                <Typography variant="subtitle2" mt={1}>{currentLearning.author}</Typography>
                                <Typography variant="body1" mt={4}>{currentLearning.description}</Typography>
                           </Container>
                        </Boxed>
                    </Card>) : <CircularProgress sx={{ m: "auto" }} />}

        </Layout>
    );
};

export default Learning;
