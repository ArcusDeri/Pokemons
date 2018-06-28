import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistEditComponent } from './wishlist/wishlist-edit/wishlist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    GalleryListComponent,
    GalleryItemComponent,
    GalleryDetailComponent,
    WishlistComponent,
    WishlistEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }