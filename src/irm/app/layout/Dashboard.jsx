import '../../style/Dashboard.scss';
import '../../style/App.scss';

import IrmNavMenu from '../component/Menu';

const Dashboard = ({ items }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="inline-flex items-center gap-2 m-4">
              <img
              src="/images/app_icon.svg"
              alt="iRM Logo"
              width={40}
              height={40}
              />
              <img
                  src='/images/logotype.png'
                  width={75}
                  height={35}
              />
        </div>
      </header>
      <div className="dashboard-content">
          <IrmNavMenu/>
        <main className="dashboard-main">
          { items }
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
