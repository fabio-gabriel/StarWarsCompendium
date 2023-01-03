import PanelProvider from "../contexts/PanelContext";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import "../Styles/MainPanel.scss";

export default function MainPanel() {
  return (
    <PanelProvider>
      <div className="content">
        <Sidebar request={"/people"} />
        <MainContent />
      </div>
    </PanelProvider>
  );
}
