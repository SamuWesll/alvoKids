import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-toggle',
  templateUrl: './input-toggle.component.html',
  styleUrls: ['./input-toggle.component.scss']
})
export class InputToggleComponent implements OnInit, ControlValueAccessor {
  @Input() label: string | undefined;
  @Input() clear = false;
  @Input() readonly = false;
  @Input() identifier: string | undefined;
  @Output() funcAposLimpar = new EventEmitter();
  @Output() outputSelect = new EventEmitter();

  controle = new FormControl();

  onChange: (_: any) => void = () => { };
  onTouched: (_: any) => void = () => { };

  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }

    this.controle.valueChanges.subscribe((novoValor) => {
      const ehUndefinedOuNull = (v: any) => v === undefined || v === null;
      const valorEhVazio = ehUndefinedOuNull(this.valor);
      const novoValorEhVazio = ehUndefinedOuNull(novoValor);
      if (!(valorEhVazio && novoValorEhVazio)) {
        this.valor = novoValor;
      }
    });
  }

  get valor() {
    return this.controle.value;
  }

  set valor(novoValor: string) {
    this.onChange(novoValor);
    this.outputSelect.emit(novoValor)
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
