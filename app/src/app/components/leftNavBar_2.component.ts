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
  selector: 'bh-leftNavBar_2',
  templateUrl: './leftNavBar_2.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class leftNavBar_2Component {
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
      this.sd_dLujHIwhhGt9i3Jo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dLujHIwhhGt9i3Jo(bh) {
    try {
      bh = this.sd_y3AC0Rqe2DOPTyzD(bh);
      //appendnew_next_sd_dLujHIwhhGt9i3Jo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dLujHIwhhGt9i3Jo');
    }
  }

  //appendnew_flow_leftNavBar_2Component_start

  sd_y3AC0Rqe2DOPTyzD(bh) {
    try {
      this.page.textInLeftNav = undefined;
      bh = this.sd_L1J3o7YOLjPVK6F4(bh);
      //appendnew_next_sd_y3AC0Rqe2DOPTyzD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y3AC0Rqe2DOPTyzD');
    }
  }

  sd_L1J3o7YOLjPVK6F4(bh) {
    try {
      const page = this.page;
      page.textInLeftNav = [
        {
          text: 'Groups',
        },
        {
          text: 'Events',
        },
        {
          text: 'Followed Hashtags',
        },
      ];
      //appendnew_next_sd_L1J3o7YOLjPVK6F4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L1J3o7YOLjPVK6F4');
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
  //appendnew_flow_leftNavBar_2Component_Catch
}
