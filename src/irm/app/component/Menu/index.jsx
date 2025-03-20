import React, { useState } from 'react';
import { Menu } from 'antd';
import { RightOutlined } from '@ant-design/icons';

// 定義菜單項數據
const items = [
  {
    key: '1',
    label: 'Dashboard',
  },
  {
    key: '2',
    label: 'Device Discovery',
  },
  {
    key: '3',
    label: 'Device Management',
    children: [
      {
        key: '31',
        label: 'All Device',
      },
      {
        key: '32',
        label: 'Network Topology',
      },
      {
        key: 'ipmiKvm',
        label: 'IPMI KVM',
        children: [
          {
            key: '3.1',
            label: 'KVM Manager',
          },
          {
            key: '3.2',
            label: 'KVM Dashboard',
          },
        ],
      },
    ],
  },
  {
    key: '4',
    label: 'Alert Configuration',
  },
  {
    key: '5',
    label: 'Redundancy',
    children: [
      {
        key: '51',
        label: 'Device Pair',
      },
      {
        key: '52',
        label: 'Policy',
      },
      {
        key: '53',
        label: 'Plan',
      },
    ],
  },
  {
    key: '6',
    label: 'Log',
    children: [
      {
        key: '61',
        label: 'System Log',
      },
      {
        key: '62',
        label: 'Hardware & Device',
        children: [
          {
            key: '621',
            label: 'Agent Alert Log',
          },
          {
            key: '622',
            label: 'IPMI Alert Log',
          },
          {
            key: '623',
            label: 'IPMI Event List',
          },
          {
            key: '624', // 注意：原來的key有重複使用'623'，已修正
            label: 'Historic Data Log',
          },
        ],
      },
      {
        key: '63',
        label: 'Log',
        children: [
          {
            key: '631',
            label: 'Redundancy Log',
          },
          {
            key: '632',
            label: 'Recovery Log',
          },
        ],
      },
    ],
  },
  {
    key: '7',
    label: 'Settings',
    children: [
      {
        key: '71',
        label: 'Notification',
      },
      {
        key: '72',
        label: 'Application',
      },
      {
        key: '73',
        label: 'User Management',
      },
      {
        key: '74',
        label: 'Third-part Application',
      },
    ],
  },
  {
    key: '8',
    label: 'Repository',
    children: [
      {
        key: '81',
        label: 'IRMAgent Download',
      },
      {
        key: '82',
        label: 'EPD Firmware',
      },
    ],
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

export default function IrmNavMenu() {
  const [stateOpenKeys, setStateOpenKeys] = useState(['1']);
  
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <aside className="dashboard-sidebar">
      <nav>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          className="menu"
          items={items}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          expandIcon={({ isOpen }) => <RightOutlined rotate={isOpen ? 90 : 0} />}
        />
      </nav>
    </aside>
  );
}