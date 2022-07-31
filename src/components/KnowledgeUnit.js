import Unit from './Unit';
import { Data } from '../data/Data';

const KnowledgeUnit = ({ category }) => {
   let units = Data.filter((item) => item.category === category);
   if (units.length > 0) {
      return units.map((unit) => <Unit key={unit.id} unit={unit} />);
   }
   return <h1>No record in the database</h1>;
};

export default KnowledgeUnit;
