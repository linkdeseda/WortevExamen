import DesedaTableShow from './DesedaTableShow';
import DesedaDataDonut from './DesedaDataDonut';
import DesedaDataSeries from './DesedaDataSeries';
import './CSS/DesedaTest.css';

function DesedaTest() {
  return (
    <div className="DesedaBody">
      <div className="DesedaDataChart">
        <DesedaDataSeries/>
        <DesedaDataDonut />
      </div>
    <DesedaTableShow/>

    </div>
  );
}

export default DesedaTest;
