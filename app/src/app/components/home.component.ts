/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  @ViewChild('sidenav')
  public sidenav: any = null;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_DHvg9AzHPz2zdhhk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DHvg9AzHPz2zdhhk(bh) {
    try {
      bh = this.sd_CYr8A7hvGL2GLQUW(bh);
      //appendnew_next_sd_DHvg9AzHPz2zdhhk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DHvg9AzHPz2zdhhk');
    }
  }

  toggleSidNav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Wfm1cGeuTlEEa0xC(bh);
      //appendnew_next_toggleSidNav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yn3lcOkqpu2YIYw8');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_CYr8A7hvGL2GLQUW(bh) {
    try {
      this.page.icons = [];
      bh = this.addNavbarIconsx(bh);
      //appendnew_next_sd_CYr8A7hvGL2GLQUW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CYr8A7hvGL2GLQUW');
    }
  }

  addNavbarIconsx(bh) {
    try {
      const page = this.page;
      page.icons = [
        {
          icon: 'home',
          name: 'Home',
        },
        {
          icon: 'people',
          name: 'My Network',
        },
        {
          icon: 'work',
          name: 'Job',
        },
        {
          icon: 'message',
          name: 'Messaging',
        },
        {
          icon: 'notifications',
          name: 'Notifications',
        },
      ];
      //appendnew_next_addNavbarIconsx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u5WIou3LlstpSdIX');
    }
  }

  sd_Wfm1cGeuTlEEa0xC(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        sidenav: this.sidenav,
      });
      bh = this.sd_jDpGqYilG83U7doP(bh);
      //appendnew_next_sd_Wfm1cGeuTlEEa0xC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wfm1cGeuTlEEa0xC');
    }
  }

  sd_jDpGqYilG83U7doP(bh) {
    try {
      const page = this.page;
      bh.pageViews.sidenav.toggle();

      //appendnew_next_sd_jDpGqYilG83U7doP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jDpGqYilG83U7doP');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}
