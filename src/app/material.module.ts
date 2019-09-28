import { NgModule } from '@angular/core';
import {
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatTableModule,
        MatToolbarModule,
        MatInputModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule
    ],
    exports: [
        MatTableModule,
        MatToolbarModule,
        MatInputModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {

}