import { JSX } from '@ionic/core';
import { /*@__PURE__*/createReactComponent } from './createComponent';
import { ReactProps } from './ReactProps';

// /*@__PURE__*/createReactComponent
export const IonTabBarInner = /*@__PURE__*/createReactComponent<JSX.IonTabBar & ReactProps, HTMLIonTabBarElement>('ion-tab-bar');
export const IonBackButtonInner = /*@__PURE__*/createReactComponent<JSX.IonBackButton & ReactProps, HTMLIonBackButtonElement>('ion-back-button');
export const IonAppInner = /*@__PURE__*/createReactComponent<JSX.IonApp & ReactProps, HTMLIonAppElement>('ion-app');