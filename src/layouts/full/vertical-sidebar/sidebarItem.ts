import {
  LayoutDashboardIcon,BorderAllIcon,
  AlertCircleIcon,
  CircleDotIcon,
  BoxMultiple1Icon,
  BuildingIcon,
  UserIcon,
  CalendarIcon,
  DoorExitIcon,
  ReceiptIcon,
  LoginIcon, MoodHappyIcon, ApertureIcon, UserPlusIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  BgColor?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean; 
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: 'Dashboard',
    icon: LayoutDashboardIcon,
    BgColor: 'primary',
    to: '/dashboard'
  },
  { header: 'HR Works' },
  {
    title: "CompanyProfile",
    icon: BuildingIcon,
    BgColor: 'primary',
    to: "/ui/Companyprofile",
    
  },
  {
    title: "Employee Profile",
    icon: UserIcon,
    BgColor: 'primary',
    to: "/ui/Employeeprofile",
  },
  {
    title: "Attendance",
    icon: CalendarIcon,
    BgColor: 'primary',
    to: "/ui/cards",
  },
  {
    title: "Leave",
    icon: DoorExitIcon,
    BgColor: 'primary', 
    to: "/ui/Leavemanagement", 
  },

  
{ header: 'Payroll' },
// {
//     title: 'Icons',
//     icon: MoodHappyIcon,
//     BgColor: 'primary',
//     to: '/icons'
// },
{
    title: 'Payroll Generation',
    icon: ReceiptIcon,
    BgColor: 'primary',
    to: '/sample-page'
},

// { header: 'Auth' },
  {
    title: 'Calendar',
    icon: LoginIcon,
    BgColor: 'primary',
    to: '/auth/login'
},
{
    title: 'Register',
    icon: UserPlusIcon,
    BgColor: 'primary',
    to: '/auth/register'
},
];

export default sidebarItem;
