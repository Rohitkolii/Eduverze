import { useState } from 'react';
import Styles from './Guidance.module.css'
import { GoogleGenAI } from "@google/genai";


const Guidance = () => {

    const [guideresponse, setguideresponse] = useState(null);
    const [query, setquery] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    const ai = new GoogleGenAI({ apiKey: "AIzaSyBbJmZGfYHQgdZRvqGqCMpTQ_9IwtZyp64" });
    async function main(query) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${query} in depth. note output should be in html heading in h1 tag than break tag and paragraph should be in p tag and point in ul li if applicable`,
    });
    console.log(response.text);
    setguideresponse(response.text)
    if(response.text){
        setisLoading(false)
    }
    }
    
    const userquery = (e) => {
        e.preventDefault();
        setisLoading(true)
        setguideresponse(null)
        const formData = new FormData(e.target)
        const querydata = Object.fromEntries(formData.entries());
        
        const query = `Hello my name is ${querydata.name} and i am persuing or completed ${querydata.edu} and want to became ${querydata.goal} and i have skills like ${querydata.skills} please guide me for my career`
        setquery(query)
        console.log(query);
        main(query);
    }


    return (
    <div className={Styles.Guidance}>
        <div className={Styles.Guidanceinner}>
            <form onSubmit={(e)=> userquery(e)}>
                <div className={Styles.row}>
                    <label htmlFor="name">Name</label>
                    <input placeholder='Enter your name' type="text" name="name" id="" />
                </div>

                <div className={Styles.row}>
                    <label htmlFor="edu">Education</label>
                    <select name="edu" id="edu">
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                        <option value="BA">BA</option>
                        <option value="MA">MA</option>
                        <option value="B.TECH">B.Tech</option>
                        <option value="M.TECH">M.Tech</option>
                        <option value="LLB">LLB</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className={Styles.row}>
                    <label htmlFor="goal">Career Goal (if any)</label>
                    <input placeholder='Ex. Frontend Developer' type="text" name="goal" id="" />
                </div>

                <div className={Styles.row}>
                    <label htmlFor="skills">Skills (if any)</label>
                    <input placeholder='Enter your skills eg. HTML, CSS, JS' type="text" name="skills" id="" />
                </div>

                <button disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</button>
            </form>

            <div className={Styles.response}>
                {
                    guideresponse ?
                    <div className={Styles.responseinner}>
                    <p>{query || ""}.</p>
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: guideresponse }} />
                    </div>
                    :
                    <h1>Nothing here</h1>
                }
            </div>
        </div>
    </div>
  )
}

export default Guidance