import './view.css';

const View = ({ taskName, taskDate, action, index}) => {
  return ( 
    
    <div className="viewCard">
      <div className="viewCardContent">
        <div className="viewCardProp">
        <h3>{taskName}</h3>
        <p>{taskDate}</p>
        </div>
        <button onClick={() => action(index)}>X</button>
      </div>
    </div>
   );
}
 
export default View;