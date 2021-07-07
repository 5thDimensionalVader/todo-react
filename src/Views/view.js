import './view.css';

const View = () => {
  return ( 
    
    <div className="viewCard">
      <div className="viewCardContent">
        <div className="viewCardProp">
        <h3>Name of Task</h3>
        <p>YYYY-MM-DD</p>
        </div>
        <button>X</button>
      </div>
    </div>
   );
}
 
export default View;