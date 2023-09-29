import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { ParentModel } from 'src/app/shared/model/Parent.model';
import { ResponsibleService } from 'src/app/shared/service/responsible.service';

@Component({
  selector: 'app-select-parent',
  templateUrl: './select-parent.component.html',
  styleUrls: ['./select-parent.component.scss']
})
export class SelectParentComponent implements OnInit, ControlValueAccessor  {
  @Input() label: string | undefined;
  @Input() clear = false;
  @Input() readonly = false;
  @Output() funcAposLimpar = new EventEmitter();
  parents: ParentModel[] = [];
  opcoesFiltradas: any;

  controle = new FormControl();

  onChange: (_: any) => void = () => { };
  onTouched: (_: any) => void = () => { };

  constructor(
    @Self() @Optional() private ngControl: NgControl,
    private responsibleService: ResponsibleService,
  ) {
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

  ngOnInit(): void {
    this.getParent()
  }

  private getParent() {
    this.responsibleService.responsibleGet().subscribe(result => {
      this.parents = result;
    })
  }

  parseName(parent: ParentModel) {
    return `${parent.nameParent} (${parent.kinship})`
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
  
}
