import { TextArea } from "../Components/common/TextArea";
import Steps from "../Components/NewGig/Steps";
import Layout from "./Layout";

export function NewGig(){
    return(
        <Layout>
            <Steps />
            <TextArea />
            
        </Layout>
    );
}