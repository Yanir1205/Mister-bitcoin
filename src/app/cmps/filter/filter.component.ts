import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() onFilter=new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onFilterChange(filterBy){
    this.onFilter.emit(filterBy);
  }

}
