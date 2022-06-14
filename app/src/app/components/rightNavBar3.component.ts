/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-rightNavBar3',
  templateUrl: './rightNavBar3.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class rightNavBar3Component {
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
      this.sd_boIFULbdL3uuUsUG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_boIFULbdL3uuUsUG(bh) {
    try {
      bh = this.sd_WQ0t2x2g5sKM0PnE(bh);
      //appendnew_next_sd_boIFULbdL3uuUsUG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_boIFULbdL3uuUsUG');
    }
  }

  //appendnew_flow_rightNavBar3Component_start

  sd_WQ0t2x2g5sKM0PnE(bh) {
    try {
      this.page.links = undefined;
      bh = this.sd_wDwX2b97odTsIyGq(bh);
      //appendnew_next_sd_WQ0t2x2g5sKM0PnE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WQ0t2x2g5sKM0PnE');
    }
  }

  sd_wDwX2b97odTsIyGq(bh) {
    try {
      const page = this.page;
      page.links = [
        {
          text: 'About',
        },
        {
          text: 'Accessibility',
        },
        {
          text: 'Help Center',
        },
        {
          text: 'Privacy & Terms ',
        },
        {
          text: 'Ad Choices',
        },
        {
          text: 'Advertising',
        },
        {
          text: 'Business Services',
        },
        {
          text: 'Get the LinkedIn app',
        },
        {
          text: 'More',
        },
      ];
      //appendnew_next_sd_wDwX2b97odTsIyGq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wDwX2b97odTsIyGq');
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
  //appendnew_flow_rightNavBar3Component_Catch
}
