import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Title from '/src/components/Title.js';
import Raidwide from '/src/components/Raidwide.js';
import Enrage from '/src/components/Enrage.js';
import Flare from '/src/components/Flare.js';
import Tankbuster from '/src/components/Tankbuster.js';
import Color from '/src/components/Color.js';
import Role from '/src/components/Role.js';
import Waymark from '/src/components/Waymark.js';
import KittenAsset from '/src/components/KittenAsset.js';
import LargeText from '/src/components/LargeText.js'


export default {
  ...MDXComponents,
  Raidwide,
  Enrage,
  Flare,
  Tankbuster,
  Color,
  Role,
  Waymark,
  Title,
  KittenAsset,
  LargeText,
  Tabs,
  TabItem
};