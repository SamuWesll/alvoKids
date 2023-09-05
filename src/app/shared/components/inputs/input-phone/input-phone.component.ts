import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss']
})
export class InputPhoneComponent implements OnInit, ControlValueAccessor {

  @Input() label: string | undefined;
  @Input() clear = false;
  @Input() readonly = false;
  @Output() funcAposLimpar = new EventEmitter();

  controle = new FormControl();
  // phoneMask = phoneMask;
  // phoneMask = createMask({ mask: '(9999-99)|(+(999) 9999-99)', keepStatic: true });
  phoneMask = createMask({ mask: '(99) 99999-9999', keepStatic: true });

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
