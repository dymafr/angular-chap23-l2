import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

const MATERIALS = [MatButtonModule];

@NgModule({
  imports: MATERIALS,
  exports: MATERIALS
})
export class MaterialModule {}
