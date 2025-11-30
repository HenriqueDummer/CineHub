import Banner from "../../Components/Banner";
import SelectFilter from "../../Components/SelectFilter";

const Series = () => {
  return (
  
  <>
          <Banner />
          <div className="mt-24">
        <SelectFilter title={"SERIES"} />
        <SelectFilter title={"FILMES"} />
      </div>
  </>
  
   
  );
};

export default Series;