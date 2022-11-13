import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SocialItemsService {
  social: SocialItems[] = [
    {
      name: 'facebook',
      file: 'fb.svg',
      options: 'both'
    },
    {
      name: 'google',
      file: 'google.svg',
      options: 'authorization'
    },
    {
      name: 'twitter',
      file: 'twitter.svg',
      options: 'both'
    },
    {
      name: 'youtube',
      file: 'youtube.svg',
      options: 'no'

    },
    {
      name: 'telegram',
      file: 'telegram.svg',
      options: 'no'
    },
    {
      name: 'instagram',
      file: 'instagram.svg',
      options: 'no'
    },
    {
      name: 'inblog',
      file: 'inblog.svg',
      options: 'both'
    }
  ];
  constructor() { }

  get socialItems() {
    return this.social;
  }
}

interface SocialItems {
  name: string;
  file: string;
  options: 'authorization' | 'both' | 'no';
}
