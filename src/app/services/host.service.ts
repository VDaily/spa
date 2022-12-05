import { Injectable, InjectionToken } from "@angular/core";

export const HOST = new InjectionToken<string>("host");

@Injectable()
export class HostService {
  constructor() {}

  getHost(): string {
    return window.location.host;
  }
}
//Затем в конструкторе подключаем так:
// constructor(@Inject(HOST) private host: HostService) {
//   console.log(host.getHost());
// }
