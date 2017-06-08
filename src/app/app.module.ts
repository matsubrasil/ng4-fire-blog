import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// component base
import { AppComponent } from './app.component';

// components
import { NavigationComponent } from './components/navigation/navigation.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { SinglePostComponent } from './components/posts-container/single-post/single-post.component';

// services
import { PostsService } from './shared/posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostsContainerComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
