import React, { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Indent from "./components/Indent/Indent";
import SentMachine from "./components/SentMachine/SentMachine";
import CheckMachine from "./components/CheckMachine/CheckMachine";
import StoreIn from "./components/StoreIn/StoreIn";
import RepairAdvance from "./components/RepairAdvance/RepairAdvance";
import MakePayment from "./components/MakePayment/MakePayment";
import Login from "./components/Login/Login";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

// function AppContent() {
//   const { user } = useAuth();
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return <Dashboard />;
//       case "indent":
//         return <Indent />;
//       case "sent-machine":
//         return <SentMachine />;
//       case "check-machine":
//         return <CheckMachine />;
//       case "store-in":
//         return <StoreIn />;
//       case "make-payment":
//         return <MakePayment />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   if (!user) {
//     return <Login />;
//   }

//   return (
//     <div className="h-screen">
//     <div className="flex bg-gray-50 relative">
//       {/* Mobile Hamburger Icon - Right Side */}
//       <button
//         className="absolute top-4 right-4 z-50 md:hidden bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
//         onClick={() => setSidebarOpen(true)}
//       >
//         <MenuOutlined style={{ fontSize: "20px" }} />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 transform bg-white shadow-md z-50 w-64 transition-transform duration-300 md:relative md:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Close Icon (mobile) */}
//         <div className="flex justify-end p-4 md:hidden">
//           <button
//             className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <CloseOutlined style={{ fontSize: "18px" }} />
//           </button>
//         </div>

//         {/* Sidebar with click-to-close in mobile */}
//         <Sidebar
//           activeTab={activeTab}
//           setActiveTab={(tab) => {
//             setActiveTab(tab);
//             setSidebarOpen(false);
//           }}
//         />
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main Content */}
//       <main className="flex-1 overflow-auto">
//         <div className="p-8 h-full">{renderContent()}</div>
//       </main>

//       {/* footer */}

//     </div>
//       {/* Fixed Footer */}
//         <footer className="bg-white border-t border-gray-200 py-3 px-4 flex-shrink-0">
//           <div className="container mx-auto text-center text-sm text-gray-600">
//             Powered by{' '}
//             <a 
//               href="https://www.botivate.in" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-indigo-600 hover:text-indigo-800 font-medium"
//             >
//               Botivate
//             </a>
//           </div>
//         </footer>
//       </div>
//   );
// }


function AppContent() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "indent":
        return <Indent />;
      case "sent-machine":
        return <SentMachine />;
      case "check-machine":
        return <CheckMachine />;
      case "store-in":
        return <StoreIn />;
      case "make-payment":
        return <MakePayment />;
      default:
        return <Dashboard />;
    }
  };

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Hamburger Icon - Right Side */}
        <button
          className="absolute top-4 right-4 z-50 md:hidden bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuOutlined style={{ fontSize: "20px" }} />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform bg-white shadow-md z-50 w-64 transition-transform duration-300 md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Icon (mobile) */}
          <div className="flex justify-end p-4 md:hidden">
            <button
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
              onClick={() => setSidebarOpen(false)}
            >
              <CloseOutlined style={{ fontSize: "18px" }} />
            </button>
          </div>

          {/* Sidebar with click-to-close in mobile */}
          <Sidebar
            activeTab={activeTab}
            setActiveTab={(tab) => {
              setActiveTab(tab);
              setSidebarOpen(false);
            }}
          />
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8 h-full">{renderContent()}</div>
        </main>
      </div>

      {/* Fixed Footer */}
      <footer className="bg-white border-t border-gray-200 py-3 px-4">
        <div className="container mx-auto text-center text-sm text-gray-600">
          Powered by{' '}
          <a 
            href="https://www.botivate.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Botivate
          </a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
