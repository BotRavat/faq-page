import Question from "../question/Question";
import "./pagebottom.css";
import { questions } from "../../dummy";

export default function PageBottom() {
    
  return (
    <div className="pagebottom">
      <h1>Frequently Asked Question</h1>
        {questions.map((c) => {
         return <Question questions={c} key={c.id}/>
        })}

        <p style={{color:'blue',fontSize:'18px',fontWeight:'500',cursor:'pointer'}}>Veiw more</p>
    </div>
  );
}
