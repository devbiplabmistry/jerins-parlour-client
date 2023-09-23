import Banner from "../banner/Banner";
import Feedback from "../feedback/Feedback";
import Sample from "../sampleService/Sample";
import Services from "../services/Services";
import Testimonials from "../testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Sample></Sample>
           <Testimonials></Testimonials>
           <Feedback></Feedback>
        </div>
    );
};

export default Home;