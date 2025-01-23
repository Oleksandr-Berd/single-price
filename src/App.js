import * as SC from "./AppCustom";
import Offer from "./components/Offer/Offer";
import Subscription from "./components/Subscription/Subscription";
import SubTable from "./components/SubTable/SubTable";
import Table from "./components/Table/Table";
import WhyUs from "./components/WhyUs/WhyUs";
function App() {
  return (
    <SC.AppCustom className="App">
      <Table>
        <Offer />
        <SubTable>
          <Subscription />
          <WhyUs/>
        </SubTable>
      </Table>
    </SC.AppCustom>
  );
}
export default App;
