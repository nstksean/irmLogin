import '../../style/Dashboard.css';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>Analytics</li>
              <li>Reports</li>
              <li>Settings</li>
            </ul>
          </nav>
        </aside>
        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
