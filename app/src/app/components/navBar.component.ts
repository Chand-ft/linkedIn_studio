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
  selector: 'bh-navBar',
  templateUrl: './navBar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class navBarComponent {
  @Output('callFromChildComponent')
  public callFromChildComponent: any = new EventEmitter<any>();
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
      this.sd_k1RtO8ilo3Je2HUH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_k1RtO8ilo3Je2HUH(bh) {
    try {
      bh = this.sd_PUl1rRoEnweulRBA(bh);
      //appendnew_next_sd_k1RtO8ilo3Je2HUH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k1RtO8ilo3Je2HUH');
    }
  }

  hideShowSidenav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OLfbRFhvzdSPPAXP(bh);
      //appendnew_next_hideShowSidenav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RiIEQJspVzrpvLi2');
    }
  }

  //appendnew_flow_navBarComponent_start

  sd_PUl1rRoEnweulRBA(bh) {
    try {
      this.page.icons = [];
      bh = this.addNavbarIconsx(bh);
      //appendnew_next_sd_PUl1rRoEnweulRBA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PUl1rRoEnweulRBA');
    }
  }

  addNavbarIconsx(bh) {
    try {
      const page = this.page;
      page.navIcons = [
        {
          name: 'home',
          text: 'Home',
        },
        {
          name: 'group',
          text: 'My network',
        },
        {
          name: 'work',
          text: 'Jobs',
        },
        {
          name: 'comment',
          text: 'Messaging',
        },
        {
          name: 'notifications_none',
          text: 'Notifications',
        },
      ];
      //appendnew_next_addNavbarIconsx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_080MnmjlFuG17xC8');
    }
  }

  sd_OLfbRFhvzdSPPAXP(bh) {
    try {
      bh.pageOutput.callFromChildComponent.emit();
      //appendnew_next_sd_OLfbRFhvzdSPPAXP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OLfbRFhvzdSPPAXP');
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
  //appendnew_flow_navBarComponent_Catch
}
