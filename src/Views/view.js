import './view.css';

const View = ({ taskName, taskDate, handleDelete }) => {
  return ( 
    
    <div className="viewCard">
      <div className="viewCardContent">
        <div className="viewCardProp">
        <h3>{taskName}</h3>
        <p>{taskDate}</p>
        </div>
        <button>X</button>
      </div>
    </div>
   );
}
 
export default View;