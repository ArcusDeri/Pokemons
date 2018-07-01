import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglistEditComponent } from './shoppinglist/shoppinglist-edit/shoppinglist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    GalleryListComponent,
    GalleryItemComponent,
    GalleryDetailComponent,
    ShoppinglistComponent,
    ShoppinglistEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }