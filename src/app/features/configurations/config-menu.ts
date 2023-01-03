import { Menu } from 'src/app/core/models/menu';

export class configMenu {
  static menus: Menu[] = [
    { title: 'Company', icon: 'home', route: 'company', level: 1 },
    {
      title: 'Department',
      icon: 'node-expand',
      route: 'salary-structure',
      level: 1,
    },
    {
      title: 'Salary Structure',
      icon: 'build',
      route: 'salary-structure',
      level: 1,
    },
    { title: 'Grade', icon: 'apartment', route: 'grade', level: 1 },
    { title: 'Position', icon: 'box-plot', route: 'position', level: 1 },
    {
      title: 'Directory',
      icon: 'unordered-list',
      route: 'directory',
      level: 1,
    },
    { title: 'Bank', icon: 'bank', route: 'salary-structure', level: 1 },
  ];
}
