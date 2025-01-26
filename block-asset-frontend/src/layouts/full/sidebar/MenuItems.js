import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTransfer, IconUserPlus, IconBrandStripe, IconBrandTabler, IconUserCircle, IconReport, IconDeviceWatch

} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Reports',
    icon: IconReport,
    href: '/ui/assetcreation',
  },
  {
    id: uniqueId(),
    title: 'Wearable Tracking',
    icon: IconDeviceWatch,
    href: '/ui/WearableDashboard',
  },
  {
    id: uniqueId(),
    title: 'Patient Summary',
    icon: IconBrandTabler,
    href: '/ui/patientsummary',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'About Us',
    icon: IconUserCircle,
    href: '/aboutus',
  },
  // {
  //   id: uniqueId(),
  //   title: 'About Us',
  //   icon: IconAperture,
  //   href: '/aboutus',
  // },
];

export default Menuitems;
