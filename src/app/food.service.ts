import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  factoryResolver;
  rootViewContainer;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(ItemComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}

// https://medium.com/front-end-weekly/dynamically-add-components-to-the-dom-with-angular-71b0cb535286
