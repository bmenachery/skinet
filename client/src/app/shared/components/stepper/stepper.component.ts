import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { ProviderAst } from '@angular/compiler';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper implements OnInit {
  @Input() LinearModeSelected: boolean;


  ngOnInit(): void {
    this.linear = this.LinearModeSelected;
  }

 onClick(index: number) {
   this.selectedIndex = index;
   console.log(this.selectedIndex);
 }

}
