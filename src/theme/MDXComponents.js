import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Title from '/src/components/Title.js';
import Raidwide from '/src/components/Raidwide.js';
import Tankbuster from '/src/components/Tankbuster.js';
import Role from '/src/components/Role.js';


export default {
  ...MDXComponents,
  Raidwide,
  Tankbuster,
  Role,
  Title,
  Tabs,
  TabItem
};