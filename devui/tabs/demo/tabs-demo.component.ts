import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'd-demo-tabs',
  templateUrl: './tabs-demo.component.html',
})
export class TabsDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: require('!!raw-loader!./basic/basic.component.html') },
    { title: 'TS', language: 'typescript', code: require('!!raw-loader!./basic/basic.component.ts') },
    { title: 'SCSS', language: 'css', code: require('!!raw-loader!./basic/basic.component.css') },
  ];

  withoutContentSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: require('!!raw-loader!./without-content/without-content.component.html') },
    { title: 'TS', language: 'typescript', code: require('!!raw-loader!./without-content/without-content.component.ts') },
  ];

  beforeChangeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: require('!!raw-loader!./before-change/before-change.component.html') },
    { title: 'TS', language: 'typescript', code: require('!!raw-loader!./before-change/before-change.component.ts') },
  ];
  customSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: require('!!raw-loader!./custom/custom.component.html') },
    { title: 'TS', language: 'typescript', code: require('!!raw-loader!./custom/custom.component.ts') },
  ];
  configSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: require('!!raw-loader!./config/config.component.html') },
    { title: 'TS', language: 'typescript', code: require('!!raw-loader!./config/config.component.ts') },
  ];
  ConfigurableSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: require('!!raw-loader!./configurable-tabs/configurable-tabs.component.html') },
    { title: 'TS', language: 'typescript', code: require('!!raw-loader!./configurable-tabs/configurable-tabs.component.ts') },
    { title: 'SCSS', language: 'css', code: require('!!raw-loader!./configurable-tabs/configurable-tabs.component.scss') },
    {
      title: 'tabs-transfer HTML',
      language: 'xml',
      code: require('!!raw-loader!./configurable-tabs/tabs-transfer/tabs-transfer.component.html'),
    },
    {
      title: 'tabs-transfer TS',
      language: 'typescript',
      code: require('!!raw-loader!./configurable-tabs/tabs-transfer/tabs-transfer.component.ts'),
    },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.tabs.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.tabs.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'no-set-content', value: values['no-set-content'] },
      { dAnchorLink: 'custom-template', value: values['custom-template'] },
      { dAnchorLink: 'configuration-type-and-arrangement', value: values['configuration-type-and-arrangement'] },
      { dAnchorLink: 'intercept-tab-switch', value: values['intercept-tab-switch'] },
      { dAnchorLink: 'custom-tabs-display-and-arrangement', value: values['custom-tabs-display-and-arrangement'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
