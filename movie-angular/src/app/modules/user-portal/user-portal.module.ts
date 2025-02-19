import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPortalRoutingModule } from './user-portal-routing.module';
import { UserPortalComponent } from './user-portal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MovieSlideComponent } from './components/movie-slide/movie-slide.component';
import { MovieDetailOnSlideComponent } from './components/movie-detail-on-slide/movie-detail-on-slide.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { ContentHomeComponent } from './components/content-home/content-home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { EvaluateMovieComponent } from './components/evaluate-movie/evaluate-movie.component';
import { DetailCommentComponent } from './components/detail-comment/detail-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { AccountComponent } from './components/account/account.component';
import { WatchingComponent } from './components/watching/watching.component';
import { FavoriteComponent } from './components/favourite/favourite.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';
import { PlyrModule } from 'ngx-plyr';
import { MomentModule } from 'ngx-moment';
import { ListMovieDataComponent } from './components/list-movie-data/list-movie-data.component';
import { ContentMovieComponent } from './components/content-movie/content-movie.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { ThousandSuffixesPipe } from '../admin-portal/pipe/filter.pipe';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { BillItemComponent } from './components/bill-item/bill-item.component';

@NgModule({
  declarations: [
    UserPortalComponent,
    HomeComponent,
    MovieSlideComponent,
    MovieDetailOnSlideComponent,
    ContentHomeComponent,
    MoviesComponent,
    LoginComponent,
    SignupComponent,
    MovieDetailsComponent,
    EvaluateMovieComponent,
    DetailCommentComponent,
    AccountProfileComponent,
    AccountComponent,
    WatchingComponent,
    FavoriteComponent,
    PaymentPageComponent,
    ModalPaymentComponent,
    ListMovieDataComponent,
    ContentMovieComponent,
    SearchMovieComponent,
    ThousandSuffixesPipe,
    TransactionHistoryComponent,
    BillItemComponent,
  ],
  imports: [
    CommonModule,
    UserPortalRoutingModule,
    SharedModule,
    MomentModule,
    NgbModule,
    PlyrModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    NgSelectModule,
    ProgressSpinnerModule,
    NgxPayPalModule,
  ],
  bootstrap: [AccountProfileComponent],
})
export class UserPortalModule { }
