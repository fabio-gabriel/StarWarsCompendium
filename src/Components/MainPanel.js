import PanelProvider from "../contexts/PanelContext";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import "../Styles/MainPanel.scss";

export default function MainPanel({request}) {
  return (
    <PanelProvider>
      <div className="content">
        <Sidebar request={request} />
        <MainContent />
      </div>
    </PanelProvider>
  );
}
