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
  selector: 'bh-rightNavBar',
  templateUrl: './rightNavBar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class rightNavBarComponent {
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
      this.sd_hHC6dzkgBQraJrAI(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hHC6dzkgBQraJrAI(bh) {
    try {
      bh = this.sd_S7wDE0RFOyFZjA8v(bh);
      //appendnew_next_sd_hHC6dzkgBQraJrAI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hHC6dzkgBQraJrAI');
    }
  }

  //appendnew_flow_rightNavBarComponent_start

  sd_S7wDE0RFOyFZjA8v(bh) {
    try {
      this.page.rightNavBarArray = undefined;
      bh = this.sd_aLelbhZbwmUOWzK8(bh);
      //appendnew_next_sd_S7wDE0RFOyFZjA8v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S7wDE0RFOyFZjA8v');
    }
  }

  sd_aLelbhZbwmUOWzK8(bh) {
    try {
      const page = this.page;
      page.rightNavBarArray = [
        {
          name: 'Absa Group',
          text: 'Financial Services | Johannesburg',
          image: '/Web/LinkedIn app images/Absa_logo.webp',
        },
        {
          name: 'JavaScript Developer',
          text: 'Software | Cape Town',
          image: '/Web/LinkedIn app images/JavaScript_logo.svg.png',
        },
        {
          name: 'NBA',
          text: 'Sports broadcasting | USA',
          image: '/Web/LinkedIn app images/nba_logo.jpeg',
        },
      ];
      //appendnew_next_sd_aLelbhZbwmUOWzK8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aLelbhZbwmUOWzK8');
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
  //appendnew_flow_rightNavBarComponent_Catch
}
