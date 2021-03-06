import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'd-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  breadData = [{ label: 'DevUI', showMenu: false, link: '/components/zh-cn/get-start' },
  {
    label: '面包屑', showMenu: true, link: '/components/zh-cn/breadcrumb/demo',
    menuList: [
      { name: '锚点', link: '/components/zh-cn/anchor/demo' },
      { name: '按钮', link: '/components/zh-cn/button/demo' }
    ]
  }];
  constructor() {
  }
  ngOnInit(): void {

  }

  toggleEvent(event) {
    console.log(event);
  }
}
