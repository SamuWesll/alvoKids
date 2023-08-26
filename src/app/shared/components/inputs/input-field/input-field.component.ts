import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() label: string | undefined;
  @Input() clear = false;
  @Input() readonly = false;
  @Input() type = 'text';
  @Output() funcAposLimpar = new EventEmitter();

  controle = new FormControl();

  onChange: (_: any) => void = () => { };
  onTouched: (_: any) => void = () => { };

  get valor() {
    return this.controle.value;
  }

  set valor(novoValor: string) {
    this.onChange(novoValor);
  }

  clearField() {
    this.controle.setValue('');
    this.funcAposLimpar.emit();
  }

  writeValue(obj: any): void {
    this.controle.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.controle.disable();
    } else {
      this.controle.enable();
    }
  }
  ngOnInit(): void {
    
  }

}
