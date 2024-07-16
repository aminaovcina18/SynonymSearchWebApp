import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';
import { SnackType } from '../../config/enums/snack-bar/snack-type.enum';
import { SnackStyle } from '../../config/enums/snack-bar/snack-style.enum';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}
  public openSnackBar(
    message: string,
    action: string,
    snackType?: SnackType,
    snackStyle?: SnackStyle
  ) {
    const _snackType: SnackType =
      snackType !== undefined ? snackType : SnackType.Close;

    this.snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass:
        snackStyle === SnackStyle.Success
          ? 'success-style'
          : snackStyle === SnackStyle.Error
          ? 'error-style'
          : 'info-style',
      data: { message: message, snackType: _snackType, snackStyle: snackStyle },
    });
  }
}
