import { Component, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponent } from './second-component/second-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'angular-dynamic-components';
  componentRef_ : any;
  @ViewChild('template', { read: ViewContainerRef }) container: ViewContainerRef;
  
  constructor(private componentResolver: ComponentFactoryResolver) {}

  visibleComponent = (name) => {
    this.container.clear();
    if(name === 'first'){
      const compFactory = this.componentResolver.resolveComponentFactory(FirstComponent);
      this.componentRef_ = this.container.createComponent(compFactory);
      this.componentRef_.instance.message = "This is first component";
    }
    else if(name === 'second'){
      const compFactory = this.componentResolver.resolveComponentFactory(SecondComponent);
      this.componentRef_ = this.container.createComponent(compFactory);
      this.componentRef_.instance.message = "This is Second component";
    }
  }

  ngOnDestroy() {
    this.componentRef_.destroy
  }
}
