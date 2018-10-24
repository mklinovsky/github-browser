import { Component, Input } from '@angular/core';

@Component({
  selector: 'ghb-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() user: any;
  @Input() loaded: boolean;
  @Input() showTooltip: boolean;
  @Input() positionStyle: any;

  constructor() { }
}
