import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SocialItemsService {
  social: SocialItems[] = [
    {
      name: 'facebook',
      file: 'fb.svg',
    },
    {
      name: 'google',
      file: 'google.svg',
    },
    {
      name: 'twitter',
      file: 'twitter.svg',
    },
    {
      name: 'youtube',
      file: 'youtube.svg',
    },
    {
      name: 'telegram',
      file: 'telegram.svg'
    },
    {
      name: 'instagram',
      file: 'instagram.svg'
    },
    {
      name: 'inblog',
      file: 'inblog.svg'
    }
  ];
  constructor() { }

  socialItems(socialArray: string[]) {
    return this.social.filter((socialItem) => {
      return socialArray.includes(socialItem.name);
    })
  }
}

interface SocialItems {
  name: string;
  file: string;
}
